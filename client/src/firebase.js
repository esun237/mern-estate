// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a6b72.firebaseapp.com",
  projectId: "mern-estate-a6b72",
  storageBucket: "mern-estate-a6b72.appspot.com",
  messagingSenderId: "711969547264",
  appId: "1:711969547264:web:5a00ee0ee42213664e24e5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
