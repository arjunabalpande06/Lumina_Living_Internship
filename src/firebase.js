import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUgxLdsZ9rRXsTAoRab5a9iClcjwyIi9k",
  authDomain: "lumina-e054f.firebaseapp.com",
  projectId: "lumina-e054f",
  storageBucket: "lumina-e054f.firebasestorage.app",
  messagingSenderId: "742055274718",
  appId: "1:742055274718:web:32b687caf5b67ae53cba4f",
  measurementId: "G-7HL199G9X8"
};

console.log("Firebase loaded");
console.log(firebaseConfig.apiKey);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;