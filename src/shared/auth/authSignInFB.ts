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
                    resolve(true);
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