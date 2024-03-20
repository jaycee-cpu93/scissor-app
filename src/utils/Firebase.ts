// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxRLmq_iYl-fTmmSru8vu4dqapYIonq_A",
  authDomain: "scissor-app-8f749.firebaseapp.com",
  projectId: "scissor-app-8f749",
  storageBucket: "scissor-app-8f749.appspot.com",
  messagingSenderId: "834493036118",
  appId: "1:834493036118:web:187e4148a130137c562df7",
  measurementId: "G-YZRRTLNZS7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const authenticationInstance = getAuth(app)