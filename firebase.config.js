// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9p9OkQ99HMRhbp_X0EfaO6eECVp83ZuM",
  authDomain: "esp8266bynasim.firebaseapp.com",
  databaseURL: "https://esp8266bynasim-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp8266bynasim",
  storageBucket: "esp8266bynasim.firebasestorage.app",
  messagingSenderId: "646483102963",
  appId: "1:646483102963:web:a1962c6a2d215bc0d8fb86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;