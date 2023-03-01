// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzv9wmCkj_B76we2b7-Gu1RuEkk49roSw",
  authDomain: "shopping-app-amz.firebaseapp.com",
  projectId: "shopping-app-amz",
  storageBucket: "shopping-app-amz.appspot.com",
  messagingSenderId: "959691341095",
  appId: "1:959691341095:web:dba1630cfd9152aab4bd02",
  measurementId: "G-GHDR0L6R7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
