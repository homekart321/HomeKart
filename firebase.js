// firebase.js (FULL & FINAL)

// Import Firebase modules (MODULAR SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

// Your Firebase Configuration (UNCHANGED)
const firebaseConfig = {
    apiKey: "AIzaSyDaEfwJMy4S1VeOIc3uSIF-DLgvdy3eV-E",
    authDomain: "homekart-24604.firebaseapp.com",
    projectId: "homekart-24604",
    storageBucket: "homekart-24604.firebasestorage.app",
    messagingSenderId: "321537189900",
    appId: "1:321537189900:web:78897b3b226316de0b6629"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Firebase Auth
export const auth = getAuth(app);

// Firestore Database (FOR CART SYNC ACROSS DEVICES)
export const db = getFirestore(app);
