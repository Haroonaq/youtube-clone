// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    onAuthStateChanged,
    User
} from "firebase/auth";
import { getFunctions } from "firebase/functions";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  authDomain: "yt-clone-d72c9.firebaseapp.com",
  projectId: "yt-clone-d72c9",
  appId: "1:881780933747:web:c871305b48a69728149606",
  measurementId: "G-P1BJFGTGR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export const functions = getFunctions();

/**
 * Signs the user in with a Google popup
 * @returns A promise that resolves with the user's credentials
 */
export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out
 * @returns A promise that resolves when the user is signed out.
 */
export function signOut() {
    return auth.signOut();
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscribe callback
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void){
    return onAuthStateChanged(auth, callback);
}