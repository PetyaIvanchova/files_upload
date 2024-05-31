// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "filesupload-6ba1b.firebaseapp.com",
  projectId: "filesupload-6ba1b",
  storageBucket: "filesupload-6ba1b.appspot.com",
  messagingSenderId: "536687247370",
  appId: "1:536687247370:web:7ab108fa1f1048e32e5ff3",
  measurementId: "G-T9QJ8GLL70",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
