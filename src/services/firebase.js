// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1PncgYU_ZDx_1VQ7vM_mo87n1iNg_cf8",
  authDomain: "projeto-leitura-7f7ea.firebaseapp.com",
  projectId: "projeto-leitura-7f7ea",
  storageBucket: "projeto-leitura-7f7ea.firebasestorage.app",
  messagingSenderId: "303309617484",
  appId: "1:303309617484:web:7adbc8e868a90f5273b7e9"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

