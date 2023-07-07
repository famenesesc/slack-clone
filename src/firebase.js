import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAj770BrQm0TUh4L1_3fmUaZA8RqRKrRT8",
    authDomain: "schaty0702.firebaseapp.com",
    projectId: "schaty0702",
    storageBucket: "schaty0702.appspot.com",
    messagingSenderId: "954521482614",
    appId: "1:954521482614:web:1aaeede0e52d3ec8583657"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider, db };