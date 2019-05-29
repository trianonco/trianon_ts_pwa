import firebase from "firebase/app";
import "firebase/auth";

export default class Auth {

    public hasLogin(): boolean {
        const userStr = localStorage.getItem("user") || "false";
        const userObj = JSON.parse(userStr);
        return !userObj;
    }

    public hasProfile(): boolean {
        const userStr = localStorage.getItem("user") || "false";
        const userObj = JSON.parse(userStr);
        return userObj;
    }


}
