// var provider = new firebase.auth.FacebookAuthProvider();

import firebase from "firebase/app";
import "firebase/auth";

export default class AuthFB {

    private user = {
        id: "",
        email: ""
    };

    constructor() {
        this.user.id = "";
        this.user.email = "";
    }


    public doLoginFB(): Promise<boolean> {
        return new Promise((resolve, reject) => {


            var provider = new firebase.auth.FacebookAuthProvider();
            firebase
                .auth()
                .signInWithPopup(provider)
                .then((result: any) => {
                    var token = result.credential.accessToken;
                    var user = result.user;
                    localStorage.setItem("user", JSON.stringify(user));


                    const trianonUser = {
                        name: user.displayName,
                        email: user.email,
                        password: 'AUTH-FB',
                        phoneNumber: user.phoneNumber || ' ',
                        photoUrl: user.photoURL,
                        birthday: '',
                        gender: '',
                        createdAt: user.metadata.creationTime,
                        lastSignInAt: user.metadata.lastSignInTime,
                    }


                    firebase.firestore().collection("USERS")
                        .doc(trianonUser.email)
                        .set(trianonUser)
                        .then((response: any) => {
                            console.log("Document successfully written!");
                            resolve(true);
                        })
                        .catch((error: any) => {
                            console.error("Error writing document: ", error);
                            reject();
                        });

                })
                .catch((error: any) => {


                    var errorCode = error.code;
                    var errorMessage = error.message;
                    var email = error.email;
                    var credential = error.credential;
                    console.error("Auth Error GMAIL");
                    console.error(error);
                    reject();


                });
        })
    }
}