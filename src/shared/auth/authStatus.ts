import firebase from "firebase/app";
import "firebase/auth";

export default class Auth {

    private user = {
        id: "",
        email: ""
    };

    constructor() {
        this.user.id = "";
        this.user.email = "";
    }

    public isLogged(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged((user: any) => {
                if (user) {
                    resolve(true);
                } else {
                    reject(false);
                }
            });
        });
    }




}
