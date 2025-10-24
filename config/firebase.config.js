// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "qwiikorder-6afba.firebaseapp.com",
  projectId: "qwiikorder-6afba",
  storageBucket: "qwiikorder-6afba.firebasestorage.app",
  messagingSenderId: "488419699841",
  appId: "1:488419699841:web:99a6339725698490433180"
};


// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};