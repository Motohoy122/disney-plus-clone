
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyA4LlUlIWdkfyM1dVrS8pCFJ99mvg5FR2o",
    authDomain: "disney-plus-clone-523b8.firebaseapp.com",
    projectId: "disney-plus-clone-523b8",
    storageBucket: "disney-plus-clone-523b8.appspot.com",
    messagingSenderId: "228193208347",
    appId: "1:228193208347:web:543b8217650f62ebc1d0be",
    measurementId: "G-2GB7W55X98"
 
}

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;