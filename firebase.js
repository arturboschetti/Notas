// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw_w8XMelESut6SbixLdFb4S8aIrzTurI",
  authDomain: "rotina-4.firebaseapp.com",
  databaseURL: "https://rotina-4-default-rtdb.firebaseio.com",
  projectId: "rotina-4",
  storageBucket: "rotina-4.firebasestorage.app",
  messagingSenderId: "708313520236",
  appId: "1:708313520236:web:b3566fab868971ae53e049",
  measurementId: "G-77DKDK1GQW",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
