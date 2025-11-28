// Import from firebase.js
import { auth } from "./firebase.js";
import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Elements
const loginBtn = document.getElementById("loginBtn");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

// Login Function
loginBtn.addEventListener("click", async () => {
    const email = emailField.value.trim();
    const password = passwordField.value.trim();

    if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return;
    }

    try {
        // Firebase Login
        const user = await signInWithEmailAndPassword(auth, email, password);

        // SAVE LOGIN STATUS (this was wrong earlier)
        localStorage.setItem("homekart_user", JSON.stringify({ email }));

        alert("Login successful!");
        window.location.href = "index.html";

    } catch (error) {
        alert(error.message);
    }
});
