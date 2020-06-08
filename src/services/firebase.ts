import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_FIREBASE_APPID,
// };
var config = {
    apiKey: "AIzaSyBKfIv7sx9HdkZy36sKKR_6SIOGd3iC6V0",
    authDomain: "codingkidz-db-tool.firebaseapp.com",
    databaseURL: "https://codingkidz-db-tool.firebaseio.com",
    projectId: "codingkidz-db-tool",
    storageBucket: "codingkidz-db-tool.appspot.com",
    messagingSenderId: "30437170944",
    appId: "1:30437170944:web:01d7090c067caf16ec5de5",
    measurementId: "G-FNRQS5WKL7"
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