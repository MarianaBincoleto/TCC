// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbDysPYrNMX5iHHWwvSTPlI_WrVUjFSb8",
  authDomain: "projecao-financeira.firebaseapp.com",
  projectId: "projecao-financeira",
  storageBucket: "projecao-financeira.appspot.com",
  messagingSenderId: "35650256515",
  appId: "1:35650256515:web:dd2a089a6e3a73335be5b6"
};

// Initialize Firebase
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export default firebase;