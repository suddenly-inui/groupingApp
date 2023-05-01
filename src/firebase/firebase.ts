import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import "firebase/compat/auth"

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, updateDoc, doc } from "@firebase/firestore";



const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

// firebaseConfigの値を元にfirebaseの初期化
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)