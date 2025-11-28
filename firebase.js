// Import Firebase Modules (Modular Version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Your Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaEfwJMy4S1VeOIc3uSIF-DLgvdy3eV-E",
    authDomain: "homekart-24604.firebaseapp.com",
    projectId: "homekart-24604",
    storageBucket: "homekart-24604.firebasestorage.app",
    messagingSenderId: "321537189900",
    appId: "1:321537189900:web:78897b3b226316de0b6629"
};

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);
