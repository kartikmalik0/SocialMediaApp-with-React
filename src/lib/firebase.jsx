// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDihYjavT8uxQY8xU1Z5SUVjbk2gXTVf_E",
    authDomain: "social-media-app-752b9.firebaseapp.com",
    projectId: "social-media-app-752b9",
    storageBucket: "social-media-app-752b9.appspot.com",
    messagingSenderId: "737582933139",
    appId: "1:737582933139:web:cdffc1ab7c17206e07d966"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)