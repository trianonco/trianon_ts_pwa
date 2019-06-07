// var provider = new firebase.auth.FacebookAuthProvider();

import firebase from "firebase/app";
import "firebase/auth";

export default class AuthEmail {

    private user = {
        id: "",
        email: ""
    };

    constructor() {
        this.user.id = "";
        this.user.email = "";
    }


    public doLoginWithEmailAndPassword(email: string, assword: string): Promise<boolean> {
        return new Promise((resolve, reject) => {

            firebase
                .auth()
                .signInWithEmailAndPassword(email, assword)
                .then((result: any) => {
                    var token = result.credential.accessToken;
                    var user = result.user;
                    localStorage.setItem("user", JSON.stringify(user));
                    resolve(true);
                })
                .catch((error: any) => {


                    var errorCode = error.code;
                    var errorMessage = error.message;
                    var email = error.email;
                    var credential = error.credential;

                    if (errorCode === 'auth/user-not-found') {
                        resolve(false);
                    } else if (errorCode === 'auth/invalid-email') {
                        console.error("Auth Error GMAIL");
                        console.error(error);
                        reject();
                    } else {
                        console.error("Auth Error EMAIL");
                        console.error(error);
                        reject();
                    }

                });
        })
    }


    public doSignUpWithEmailAndPassword(email: string, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {

            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((response: any) => {

                    var token = response.credential.accessToken;
                    var user = response.user;
                    localStorage.setItem("user", JSON.stringify(user));


                    const trianonUser = {
                        name: user.displayName,
                        email: user.email,
                        password: password,
                        phoneNumber: user.phoneNumber || ' ',
                        photoUrl: user.photoURL,
                        birthday: '',
                        gender: '',
                        createdAt: user.metadata.creationTime,
                        lastSignInAt: user.metadata.lastSignInTime
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

                    console.error(errorCode);
                    reject();
                });
        });
    }
}