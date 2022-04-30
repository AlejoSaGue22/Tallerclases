
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDaDtQXGkWkRE8xPWiKQYtmB9bzyFsXmfk",
  authDomain: "formu-inscrip1.firebaseapp.com",
  projectId: "formu-inscrip1",
  storageBucket: "formu-inscrip1.appspot.com",
  messagingSenderId: "501819882746",
  appId: "1:501819882746:web:53fea00c727af8dabf5d43"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export {firebase}