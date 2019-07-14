import * as functions from 'firebase-functions';

import HandleUpdateBuyMethod from './buyProcess/handleUpdateBuy';

import HandleUpdateInStockProcessMethod from './stockProcess/handleUpdateInStockProcess';
import HandleUpdateInShippingProcessMethod from './shippingProcess/handleUpdateInShippingProcess';
import HandleUpdateInDeliveredProcessMethod from './deliveryProcess/handleUpdateInDeliveredProcess';

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



export const HandleUpdateInBuy = functions.https.onRequest((request, response) => {
    cors(request, response, () => {

        // CREAR COMPRA
        HandleUpdateBuyMethod(request, response)
            .then((responseOrder: any) => {
                cors(request, response, () => {
                    response.redirect('http://trianon.com.co/view/profile')
                });
            })
            .catch((errorString: any) => response.send(JSON.stringify(errorString)));
    });
});

export const HandleUpdateInStock = functions.https.onRequest((request, response) => {
    cors(request, response, () => {

        // ACTUALIZA COMPRA 
        // CORREO A USUARIO
        HandleUpdateInStockProcessMethod(request, response)
            .then((responseOrder: any) => {
                cors(request, response, () => {
                    response.send(JSON.stringify({
                        method: 'HandleUpdateInStock',
                        status: 'OK',
                        message: 'SHOP BUY PROCESS ::  ITEM NOW IS IN STOCK',
                        data: {}
                    }));
                });
            })
            .catch((errorString: any) => response.send(JSON.stringify(errorString)));

    });
});

export const HandleUpdateInShipping = functions.https.onRequest((request, response) => {
    cors(request, response, () => {

        // ACTUALIZA COMPRA DATOS DE ENVIO
        // CORREO A USUARIO
        HandleUpdateInShippingProcessMethod(request, response)
            .then((responseOrder: any) => {
                cors(request, response, () => {
                    response.send(JSON.stringify({
                        method: 'HandleUpdateInShipping',
                        status: 'OK',
                        message: 'SHOP BUY PROCESS ::  ITEM NOW IS IN SHIPPING',
                        data: {}
                    }));
                });
            })
            .catch((errorString: any) => response.send(JSON.stringify(errorString)));

    });
});

export const HandleUpdateInDelivered = functions.https.onRequest((request, response) => {
    cors(request, response, () => {

        // ACTUALIZA COMPRA A ENTREGADO
        // CORREO A USUARIO
        HandleUpdateInDeliveredProcessMethod(request, response)
            .then((responseOrder: any) => {
                cors(request, response, () => {
                    response.send(JSON.stringify({
                        method: 'HandleUpdateInDelivered',
                        status: 'OK',
                        message: 'SHOP BUY PROCESS ::  ITEM NOW IS DELIVERED TO CUSTOMER',
                        data: {}
                    }));
                });
            })
            .catch((errorString: any) => response.send(JSON.stringify(errorString)));

    });
});





/*
HandleUpdateBuyMethod(request, response)
    .then((responseOrder: any) => {
        cors(request, response, () => {
            response.redirect('http://localhost:8080/view/profile')
        });
    })
    .catch((errorString: any) => response.send(JSON.stringify(errorString)))


export const HandleUpdateInTemp = functions.https.onRequest((request, response) => {
    HandleUpdateInProcessMethod(request, response)
        .then((responseOrder: any) => {
            cors(request, response, () => {
                response.send(JSON.stringify(responseOrder));
                //response.redirect('http://localhost:8080/view/profile')
            });
        })
        .catch((errorString: any) => {
            cors(request, response, () => {
                response.send(JSON.stringify(errorString))
            })
        });
});
*/