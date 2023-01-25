// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOvs1mDjda5i-chLsSimeVBGucp-O8ZTE",
  authDomain: "rahmah-makan-map.firebaseapp.com",
  projectId: "rahmah-makan-map",
  storageBucket: "rahmah-makan-map.appspot.com",
  messagingSenderId: "605795927982",
  appId: "1:605795927982:web:ba73616258df1410b56a3f",
  measurementId: "G-XQKT98FBV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

