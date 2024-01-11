// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX9biHUSMJefRalcjkIe7YlIbTKYe8gVg",
  authDomain: "clone-7520c.firebaseapp.com",
  projectId: "clone-7520c",
  storageBucket: "clone-7520c.appspot.com",
  messagingSenderId: "1055655268946",
  appId: "1:1055655268946:web:40832857cdc633a667c58b",
  measurementId: "G-S64MC43T1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);