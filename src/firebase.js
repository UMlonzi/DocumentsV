
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig={
    apiKey: "AIzaSyCrXaSjWNg9JDyPrc3sR18RY2jRWBA4IJs",
    authDomain: "block-chain-7bda7.firebaseapp.com",
    projectId: "block-chain-7bda7",
    storageBucket: "block-chain-7bda7.appspot.com",
    messagingSenderId: "412391563988",
    appId: "1:412391563988:web:3b0f4f5f96d71722049141",
    measurementId: "G-KLFZX1G6JN"
};
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export{firebase}
  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);
  export const auth = getAuth();
