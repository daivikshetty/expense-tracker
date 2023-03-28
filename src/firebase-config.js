import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAhxLvlZVgGu_6EanbgqYnjAUMw3TKZp-4",
  authDomain: "react-expense-tracker-3f86e.firebaseapp.com",
  projectId: "react-expense-tracker-3f86e",
  storageBucket: "react-expense-tracker-3f86e.appspot.com",
  messagingSenderId: "433569886329",
  appId: "1:433569886329:web:755f82a0497d03180724a8",
  measurementId: "G-PVM5JB3TZ5"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);