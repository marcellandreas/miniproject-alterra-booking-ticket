import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmMhIkEVAPYxG1rQKGgNUYL6s1prjXfhk",
  authDomain: "authentication-miniproject.firebaseapp.com",
  projectId: "authentication-miniproject",
  storageBucket: "authentication-miniproject.appspot.com",
  messagingSenderId: "787526807136",
  appId: "1:787526807136:web:5d8a9c8fff991b6c0a9d05",
  measurementId: "G-QNKY11R7QX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
