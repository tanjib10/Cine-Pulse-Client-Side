// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcHq8eFcWN9pH_7qzjLhF2eshG3hDI6Dc",
  authDomain: "cine-pulse.firebaseapp.com",
  projectId: "cine-pulse",
  storageBucket: "cine-pulse.appspot.com",
  messagingSenderId: "642562444002",
  appId: "1:642562444002:web:a84a3e175208c44dc62cbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;