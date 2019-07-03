import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
//const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
/*
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});
*/
//const admin = require('firebase-admin');
//admin.initializeApp(functions.config().firebase);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});


export const HandleNewBuy = functions.https.onRequest((request, response) => {
    //response.send(JSON.stringify(request));
    response.send("Hello from HandleNewBuy Firebase!");
});

export const HandleUpdateBuy = functions.https.onRequest((request, response) => {
    try {
        admin.initializeApp(functions.config().firebase);
        const db = admin.firestore();
        const ID = request.query.ID;
        const propertiesToUpdate = {
            state: 'IN PROCESS: PAYMENT SUCCESSFULL',
            updatedAt: new Date()
        }
        const docRef = db.collection("SHOPPING_HISTORY").doc(ID);
        docRef.set(propertiesToUpdate)
            .then((doc: any) => {
                //response.send(' ACTUALIZANDO ID ' + ID + ' <br> <br> <br> ' + JSON.stringify(doc))
                response.redirect('https://trianon-co-pwa-dev.web.app/view/profile');

            }).catch((error: any) => {
                response.send("Error getting document:" + JSON.stringify(error));
            });

    } catch (e) {
        response.send("error en el try catch !!!!!!");
    }
    //response.send("Hello from HandleUpdateBuy Firebase!");
});