// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwCuTBy0P4qVjxLf9D1h_r0kkyjtSdAuI",
  authDomain: "blog-project-3a520.firebaseapp.com",
  projectId: "blog-project-3a520",
  storageBucket: "blog-project-3a520.appspot.com",
  messagingSenderId: "571810984377",
  appId: "1:571810984377:web:dcb9be02c347ada8014668"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
