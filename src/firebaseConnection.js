import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyATNJUSzaqwXouZFtspPcHe-vsSfjd0QTE",
  authDomain: "projecao-financeira1.firebaseapp.com",
  projectId: "projecao-financeira1",
  storageBucket: "projecao-financeira1.appspot.com",
  messagingSenderId: "686263431685",
  appId: "1:686263431685:web:70de29acce558a097e226c",
  measurementId: "G-8FWMKEC378"
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
