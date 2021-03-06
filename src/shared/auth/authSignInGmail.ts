
import firebase from "firebase/app";
import "firebase/auth";

export default class AuthGmail {

    private user = {
        id: "",
        email: ""
    };

    constructor() {
        this.user.id = "";
        this.user.email = "";
    }


    public doLoginGmail(): Promise<boolean> {
        return new Promise((resolve, reject) => {


            var provider = new firebase.auth.GoogleAuthProvider();
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
                        password: 'AUTH-GMAIL',
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

/*
    doLoginGmail() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;

                this.$router.push("/profile");
                // ...
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                console.error("Auth Error GMAIL");
                console.error(error);
            });
    }

    */