import * as functions from 'firebase-functions';
import HandleUpdateBuyMethod from './buyProcess/handleUpdateBuy';

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const handlebars = require('handlebars');
const pdf = require('html-pdf');

import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';

const cors = require('cors')({ origin: true });
const { Storage } = require('@google-cloud/storage');
const gcs = new Storage();

const bucket = gcs.bucket('trianon-co-pwa-dev.appspot.com');


export const helloWorld = functions.https.onRequest((request, response) => {

    // ------------------------------------ //
    //
    // ------------------------------------ //
    const user = {
        "date": new Date().toISOString(),
        "firstname": "Guillaume",
    };
    const options = {
        "format": 'A4',
        "orientation": "portrait"
    };

    const localTemplate = path.join(os.tmpdir(), 'localTemplate.html');
    const localPDFFile = path.join(os.tmpdir(), 'localPDFFile.pdf');

    bucket.file('Misc/template.html')
        .download({ destination: localTemplate })
        .then(() => {

            const source = fs.readFileSync(localTemplate, 'utf8');
            const html = handlebars.compile(source)(user);

            pdf.create(html, options).toFile(localPDFFile, function (err: any, res: any) {
                if (err) {
                    console.log(err);
                    return response.send("PDF creation error");
                }
                console.log("pdf created locally");

                return bucket.upload(localPDFFile, { destination: user.firstname + '.pdf', metadata: { contentType: 'application/pdf' } }).then(() => {
                    response.send("PDF created and uploaded!");
                }).catch((error: any) => {
                    console.error(error);
                    response.send("PDF created and uploaded!");
                });
            });



        }).catch((error: any) => {
            response.send(JSON.stringify({
                error: error
            }));
        })



    /*
     bucket.file('template.html').download({ destination: localTemplate }).then(() => {
         console.log("template downloaded locally");
         const source = fs.readFileSync(localTemplate, 'utf8');
         const html = handlebars.compile(source)(user);
         console.log("template compiled with user data", html);
 
      
         pdf.create(html, options).toFile(localPDFFile, function (err: any, res: any) {
             if (err) {
                 console.log(err);
                 return response.send("PDF creation error");
             }
             console.log("pdf created locally");
 
             return bucket.upload(localPDFFile, { destination: user.name + '.pdf', metadata: { contentType: 'application/pdf' } }).then(() => {
                 response.send("PDF created and uploaded!");
             }).catch((error: any) => {
                 console.error(error);
                 response.send("PDF created and uploaded!");
             });
         });
       
     });
       */
});


















export const HandleNewBuy = functions.https.onRequest((request, response) => {
    //response.send(JSON.stringify(request));
    response.send("Hello from HandleNewBuy Firebase!");
});
export const HandleUpdateBuy = functions.https.onRequest((request, response) => {
    HandleUpdateBuyMethod(request, response)
        .then((responseOrder: any) => {
            cors(request, response, () => {
                //ACA VA LA REDIRECCIÓN A PROFILE CON TODO EXITOSO
                //response.send(JSON.stringify(responseOrder))
                response.redirect('http://localhost:8080/view/profile')
            });
        })
        .catch((errorString: any) => response.send(JSON.stringify(errorString)))
});