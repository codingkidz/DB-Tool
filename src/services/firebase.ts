import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

firebase.initializeApp(config);
firebase
  .firestore()
  .enablePersistence()
  .catch(function (err) {
    if (err.code === "failed-precondition") {
      console.log("multiple tabs open, no persistence");
    } else if (err.code === "unimplemented") {
      console.log("current browser does not support persistence");
    }
  });

export const auth = firebase.auth();
export const db = firebase.firestore();

export const signIn = async (email: string, password: string) => {
    return await auth.signInWithEmailAndPassword(email, password)
  }
  
  export const register = async (email: string, password: string) => {
    return await auth.createUserWithEmailAndPassword(email, password)
  }
  
  export const signOut = async () => {
    return await auth.signOut();
  }
  
  export const resetPassword = async (email: string) => {
    return await auth.sendPasswordResetEmail(email)
  }