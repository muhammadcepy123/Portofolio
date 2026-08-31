import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAx68vOxgOPykiWKpQ7TCH5k5evDa9bHQ4",
    authDomain: "portofolio-cepy.firebaseapp.com",
    projectId: "portofolio-cepy",
    storageBucket: "portofolio-cepy.firebasestorage.app",
    messagingSenderId: "82012991459",
    appId: "1:82012991459:web:03220fa9751c55014bbad6"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Ekspor instance Firestore untuk digunakan di Contact.jsx
export const db = getFirestore(app);