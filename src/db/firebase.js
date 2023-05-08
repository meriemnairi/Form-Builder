import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAH6tntyR-vY_yCruYDWwTGgyQZJkNYCsQ",
  authDomain: "form-builder-3fa18.firebaseapp.com",
  projectId: "form-builder-3fa18",
  storageBucket: "form-builder-3fa18.appspot.com",
  messagingSenderId: "377507843281",
  appId: "1:377507843281:web:615c3e827bd2d0d79289f0",
  measurementId: "G-R90KKZQ4NQ",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
