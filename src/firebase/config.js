// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA0r9hvYxOMpCkeecXlgQ43V_j2UEo09U",
  authDomain: "jorunalapp-f7b85.firebaseapp.com",
  projectId: "jorunalapp-f7b85",
  storageBucket: "jorunalapp-f7b85.firebasestorage.app",
  messagingSenderId: "179619151702",
  appId: "1:179619151702:web:95ecde96d65f5b4806a0f7",
  measurementId: "G-BHSRKKWTST"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);

