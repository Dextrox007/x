// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVHi5EHn4sRlZefZLc9_Wa9uHd91UaNPc",
  authDomain: "portfoliox-2cc02.firebaseapp.com",
  projectId: "portfoliox-2cc02",
  storageBucket: "portfoliox-2cc02.appspot.com",
  messagingSenderId: "932277170836",
  appId: "1:932277170836:web:0197f9ea076ce713a8ba81",
  measurementId: "G-7973JS220Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;