// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBykbwsCy2HT5ntobNUgC0kmxk9x_ENe1s",
  authDomain: "mad-52a9b.firebaseapp.com",
  projectId: "mad-52a9b",
  storageBucket: "mad-52a9b.appspot.com",
  messagingSenderId: "231990754309",
  appId: "1:231990754309:web:a7d5b4d1d34416b0f4306c",
  measurementId: "G-6TRK3KJ60R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);