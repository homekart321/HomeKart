<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDaEfwJMy4S1VeOIc3uSIF-DLgvdy3eV-E",
  authDomain: "homekart-24604.firebaseapp.com",
  projectId: "homekart-24604",
  storageBucket: "homekart-24604.appspot.com",
  messagingSenderId: "321537189900",
  appId: "1:321537189900:web:78897b3b226316de0b6629"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
</script>
