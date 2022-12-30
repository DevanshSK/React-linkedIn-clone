// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB9FMvGjLoiARolGUnGQe0ytzNVi9FvL9A",
  authDomain: "linkedin-clone-dsk.firebaseapp.com",
  projectId: "linkedin-clone-dsk",
  storageBucket: "linkedin-clone-dsk.appspot.com",
  messagingSenderId: "887895688751",
  appId: "1:887895688751:web:5042b9ab35117bc427a8da",
  measurementId: "G-7XPX5WETD6",
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

// const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

export {db, auth};