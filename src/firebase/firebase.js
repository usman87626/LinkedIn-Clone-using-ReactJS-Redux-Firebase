import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // PASTE YOUR FIREBASE CONFIGS HERE TO LET ME PROJECT WORK
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {db,auth};