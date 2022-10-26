// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUsarX7jujiU-uodqbhm0zhO-tUg1vmx8",
  authDomain: "pi-learning.firebaseapp.com",
  projectId: "pi-learning",
  storageBucket: "pi-learning.appspot.com",
  messagingSenderId: "643812681025",
  appId: "1:643812681025:web:1cfcb6ada7b7b16fa7edc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;