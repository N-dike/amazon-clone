import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDHaEKC0pONyAhJuVKdRE0-XHaqIXiS1I4",
    authDomain: "clone-73f9a.firebaseapp.com",
    projectId: "clone-73f9a",
    storageBucket: "clone-73f9a.appspot.com",
    messagingSenderId: "276273160149",
    appId: "1:276273160149:web:1ee6acf0a290afa49de75c",
    measurementId: "G-ZT268DPWWF"
  };
  
  const app = initializeApp(firebaseConfig);  
  const db = getFirestore(app)

  
 const provider = new GoogleAuthProvider()

  export { db, provider};