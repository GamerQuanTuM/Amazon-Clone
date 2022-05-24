import  firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBflfCZpd93m580NLNgo4omarHQyS6nd-Y",
  authDomain: "clone-b3fca.firebaseapp.com",
  projectId: "clone-b3fca",
  storageBucket: "clone-b3fca.appspot.com",
  messagingSenderId: "522531408658",
  appId: "1:522531408658:web:a1d98d34b4a5a673e6c1cb",
  measurementId: "G-25M7LQZKX8",
};


const firebaseApp = firebase.initializeApp(firebaseConfig)


const db = firebaseApp.firestore();

const auth = firebase.auth()

export {db,auth};