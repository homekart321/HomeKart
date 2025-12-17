// Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";

// Firebase Auth
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Firestore Database
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

// 🔐 Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaEfwJMy4S1VeOIc3uSIF-DLgvdy3eV-E",
    authDomain: "homekart-24604.firebaseapp.com",
    projectId: "homekart-24604",
    storageBucket: "homekart-24604.appspot.com",
    messagingSenderId: "321537189900",
    appId: "1:321537189900:web:78897b3b226316de0b6629"
};

// 🚀 Initialize Firebase (ONLY ONCE)
const app = initializeApp(firebaseConfig);

// 🔑 Initialize Auth
const auth = getAuth(app);

// 🗄️ Initialize Firestore
const db = getFirestore(app);

// 📤 Export for use in other files
export { app, auth, db };
