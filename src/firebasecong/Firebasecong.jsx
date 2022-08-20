// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEERbygks520-JzudwPjqRCkZd6eGPpXA",
  authDomain: "finosper-265fa.firebaseapp.com",
  projectId: "finosper-265fa",
  storageBucket: "finosper-265fa.appspot.com",
  messagingSenderId: "703340564394",
  appId: "1:703340564394:web:7a334ca9a7d1a8028aa5d3",
  measurementId: "G-2Q22QXRDTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);