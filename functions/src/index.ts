import * as functions from 'firebase-functions';
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

    //var db = admin.firestore();

    const ID = request.query.ID;
    response.send(' ACTUALIZANDO ID ' + ID);
    //response.send("Hello from HandleUpdateBuy Firebase!");
});