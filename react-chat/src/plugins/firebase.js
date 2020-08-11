import firebase from "firebase";
import "firebase/firestore";

export const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP__API_KEY,
  authDomain: process.env.REACT_APP__AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP__DATABASE_URL,
  projectId: process.env.REACT_APP__PROJECT_ID,
  storageBucket: process.env.REACT_APP__STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP__MESSAGING_SENDER_ID,
});

export const db = firebaseApp.firestore();
