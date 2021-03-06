import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';

import EmailCustomerNewBuyTemplate from './email.customerNewBuy.template';


const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const handlebarsIntl = require('handlebars-intl');
const pdf = require('html-pdf');

const { Storage } = require('@google-cloud/storage');
const gcs = new Storage();
const bucket = gcs.bucket('trianon-co-pwa-dev.appspot.com');

handlebarsIntl.registerWith(handlebars);

export default function (request: any, response: any): Promise<any> {
    return new Promise(async (resolve, reject) => {

        try {
            const db = admin.firestore();
            const id = request.query.ID;
            const shipping_company = request.query.SHIPPING_COMPANY || '';
            const shipping_tracker_code = request.query.SHIPPING_TRACKER_CODE || '';
            const shipping_tracker_link = request.query.SHIPPING_TRACKER_LINK || '';
            const shipping_delivery_date = admin.firestore.Timestamp.fromDate(new Date(parseInt(request.query.SHIPPING_DELIVERY_DATE)));
            const billing_number = request.query.BILLING_NUMBER || 'N/A';
            const toUpdate: any = {
                'state': 'IN PROCESS: IN SHIPPING',
                'shipping.shipping_company': shipping_company,
                'shipping.tracker_code': shipping_tracker_code,
                'shipping.tracker_link': shipping_tracker_link,
                'shipping.delivery_date': shipping_delivery_date,
                'billing.number': billing_number,
            };



            const docRef = db.collection("SHOPPING_HISTORY").doc(id);
            const isUpdated = await update_Order_By_DocRef(docRef, toUpdate);
            const orderData: any = await get_Order_By_DocRef(docRef);

            orderData.meta['createdAt'] = getDateString(orderData.meta.createdAt.toDate());
            orderData.meta['updatedAt'] = getDateString(orderData.meta.updatedAt.toDate());
            orderData.billing.number = (orderData.billing.number === 'N/A') ? '' : orderData.billing.number;

            const inVoiceHTML = await get_HTML_InVoice(orderData);
            const inVoiceURL = await get_PDF_InVoice(inVoiceHTML, id);

            const emailHTML = await get_HTML_Email(orderData, inVoiceURL);
            const emailStatus = await send_SMTP_Email(orderData, emailHTML);


            resolve({
                id: id,
                shipping_company: shipping_company,
                shipping_tracker_code: shipping_tracker_code,
                //isUpdated: isUpdated,
                //emailStatus: emailStatus,
                //inVoiceURL: inVoiceURL
            });
        } catch (e) {

            //const id = request.query.ID;
            //const shipping_company = request.query.SHIPPING_COMPANY;
            //const shipping_tracker_code = request.query.SHIPPING_TRACKER_CODE || '';
            //const shipping_tracker_link = request.query.SHIPPING_TRACKER_LINK || '';
            //const shipping_delivery_date = request.query.SHIPPING_DELIVERY_DATE || '';
            //const billing_number = request.query.BILLING_NUMBER || 'N/A';
            const QUERY = request.query.ID;

            reject({
                QUERY: QUERY,
                ERROR: 'ERROR EN EL TRY CATCH'
            });

        }


    })
}






function update_Order_By_DocRef(docRef: any, toUpdate: any) {
    return new Promise((resolve, reject) => {

        docRef.update(toUpdate)
            .then((doc: any) => {
                resolve();
            }).catch((error: any) => {

                reject({
                    target: 'handleUpdateBuy.ts',
                    method: 'update_Order_By_ID',
                    resume: 'Error Updating Order into Firestore',
                    error: error
                });

            });
    });
}


function get_Order_By_DocRef(docRef: any) {
    return new Promise((resolve, reject) => {
        docRef.get()
            .then((responseDoc: any) => {
                const data = responseDoc.data();
                resolve(data)
            })
            .catch((error: any) => {
                reject({
                    target: 'handleUpdateBuy.ts',
                    method: 'get_Order_By_ID',
                    resume: 'Error Getting Order data from Firestore',
                    error: error
                });
            });
    });
}





function get_HTML_InVoice(order: any) {
    return new Promise((resolve, reject) => {
        const localTemplate = path.join(os.tmpdir(), 'localTemplate.html');
        bucket.file('Misc/customerInVoice.html')
            .download({ destination: localTemplate })
            .then(() => {
                const source = fs.readFileSync(localTemplate, 'utf8');
                const html = handlebars.compile(source)(order);
                resolve(html)
            }).catch((error: any) => {
                console.log('bucket.file')
                reject({
                    target: 'handleUpdateBuy.ts *',
                    method: 'get_HTML_InVoice',
                    resume: 'Error downloading html template using google storage service',
                    error: error
                });
            })
    })
}
function get_PDF_InVoice(html: any, id: string) {
    return new Promise((resolve: any, reject: any) => {
        const options = {
            "format": 'A4',
            "orientation": "portrait"
        };
        const localPDFFile = path.join(os.tmpdir(), 'localPDFFile.pdf');
        pdf.create(html, options).toFile(localPDFFile, function (err: any, res: any) {

            if (err) {
                reject({
                    target: 'handleUpdateBuy.ts',
                    method: 'get_PDF_InVoice',
                    resume: 'Error creating pdf using pdf. service',
                    error: err
                });
            }
            bucket.upload(localPDFFile, { destination: 'Shop-InVoices/' + id + '.pdf', metadata: { contentType: 'application/pdf' } })
                .then(() => {
                    const URL = `https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-InVoices%2F${id}.pdf?alt=media&token=f0f2ab54-4e49-4d22-9e79-ab18233e4af7`;
                    resolve(URL);
                }).catch((error: any) => {
                    reject({
                        target: 'handleUpdateBuy.ts',
                        method: 'get_PDF_InVoice',
                        resume: 'Error Uploading PDF file to bucket storage google storage service',
                        error: error
                    });
                });
        });
    })
}


function get_HTML_Email(order: any, invoice_url: any) {
    return new Promise((resolve, reject) => {

        const TEMPLATE_VARIABLES = {
            //DELIVERY_DATE: getDateString(order.shipping.delivery_date.toDate()),
            DELIVERY_DATE: '03/10/22',
            TRACKER_CODE: order.shipping.tracker_code,
            TRACKER_LINK: order.shipping.tracker_link,
            ORDER_PRODUCT_QUANTITY: order.meta.items,
            ORDER_INVOICE_URL: invoice_url,
            ORDER_PRODUCT_PICTURE: 'https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos' + '%2Fhd%2F' + `${order.products[0].ref_photo_code}-01.jpg` + '?' + `alt=media&token=18c776df-f5a7-45a0-9012-16f780381d92`,
            ORDER_PRODUCT_DESCRIPTION: order.products[0].description,
            ORDER_PRODUCT_COLOR: order.products[0].color,
            ORDER_PRODUCT_LINE: order.products[0].line,
            ORDER_PRODUCT_REF: order.products[0].ref,
            ORDER_PRODUCT_QUANTIY: order.meta.items,
            ORDER_TOTAL: order.meta.total,
            ORDER_ADDRESS: order.shipping.address,
            ORDER_ADDRESS_NEIGHBORHOOD: order.shipping.neighbourhood,
            ORDER_ADDRESS_CITY: order.shipping.city,
            ORDER_ADDRESS_DEPARTMENT: order.shipping.department,
            ORDER_PHONE: order.shipping.phone,
            ORDER_FULLNAME: order.shipping.name
        }

        const html: string = EmailCustomerNewBuyTemplate(TEMPLATE_VARIABLES) + '';

        resolve(html);
    });
}

function send_SMTP_Email(order: any, html: any) {
    return new Promise((resolve, reject) => {

        const mailOptions = {
            from: 'Pagos  y Compras Trianon <pagos@trianon.com.co>',
            to: order.billing.email,
            subject: 'COMPRA EXITOSA TRIANON ' + order.products[0].description,
            html: html
        };

        const smtpTransport = nodemailer.createTransport({
            host: 'cloud1.hostingred.com',
            port: 587,
            auth: {
                user: 'pagos@trianon.com.co',
                pass: 'hqes5LtWLg'
            }
        });

        smtpTransport.sendMail(mailOptions, (error: any, info: any) => {
            if (error) {
                reject({
                    target: 'handleUpdateBuy.ts',
                    method: 'send_SMTP_Email',
                    resume: 'Error sending Email ',
                    error: error
                });
            } else {
                resolve('ok');
            }
        });
    });
}


function getDateString(timestamp: string) {
    const d = new Date(timestamp);
    return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
}




/*
function getPriceString(price: string, currency: string) {
    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
    });
    return formatter.format(parseFloat(price));

}
*/