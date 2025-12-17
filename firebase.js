// Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";

// Firebase Auth
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Firestore (for cart sync across devices)
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

// 🔐 Your Firebase configuration
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

// Auth instance
export const auth = getAuth(app);

// Firestore instance
export const db = getFirestore(app);
