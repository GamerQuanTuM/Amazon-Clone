import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnDzIfq1UxM_bBilEvey4jIGmWeaFWG3Q",
  authDomain: "next-1aca4.firebaseapp.com",
  projectId: "next-1aca4",
  storageBucket: "next-1aca4.appspot.com",
  messagingSenderId: "644953806994",
  appId: "1:644953806994:web:9bb66d744eeb511faf2e4b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
