import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAjx0r8OsJAEI8sdTopWadcGYcnD9jcme4",
    authDomain: "ctc-capital.firebaseapp.com",
    projectId: "ctc-capital",
    storageBucket: "ctc-capital.firebasestorage.app",
    messagingSenderId: "563837502113",
    appId: "1:563837502113:web:d84ae0e9d07c997ebb26e0",
    measurementId: "G-7L643VX04V"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
