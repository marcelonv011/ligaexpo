import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAMCxq_0t0qNyEYvep7c396t24NaPvSTBg",
  authDomain: "laliga-800ef.firebaseapp.com",
  projectId: "laliga-800ef",
  storageBucket: "laliga-800ef.appspot.com",
  messagingSenderId: "257827943793",
  appId: "1:257827943793:web:63cd8806a79a9468abb2d0"
};

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default {
    firebase,
    db
  }