// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPkPJTmE7EnjZk4IZLPqf9H_UEEU5ts5o",
  authDomain: "vueproject1-6ed2d.firebaseapp.com",
  projectId: "vueproject1-6ed2d",
  storageBucket: "vueproject1-6ed2d.appspot.com",
  messagingSenderId: "550879025474",
  appId: "1:550879025474:web:e83ab0cccd258adf3250db",
  measurementId: "G-Y7NGSNPVGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);