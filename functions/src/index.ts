import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});


export const HandleNewBuy = functions.https.onRequest((request, response) => {
    //response.send(JSON.stringify(request));
    const 
    response.send("Hello from HandleNewBuy Firebase!");
});

export const HandleUpdateBuy = functions.https.onRequest((request, response) => {

    const admin = require('firebase-admin');
    admin.initializeApp();

    const ID = request.query.ID;
    response.send(' ACTUALIZANDO ID ' + ID);
    //response.send("Hello from HandleUpdateBuy Firebase!");
});