// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7El8YrMPbAVFZFiWJrVDhhCb62uf8k4U",
  authDomain: "foodorder-7b9c9.firebaseapp.com",
  projectId: "foodorder-7b9c9",
  storageBucket: "foodorder-7b9c9.firebasestorage.app",
  messagingSenderId: "1090440219776",
  appId: "1:1090440219776:web:60623a0b4daf8045b1ea65",
  measurementId: "G-3BEF4V2VFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
