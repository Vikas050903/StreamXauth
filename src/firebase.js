
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBF-YGRCCmJLK6X1bh93nN4b1GSwA16hSc",
  authDomain: "authenticationn-7ca03.firebaseapp.com",
  projectId: "authenticationn-7ca03",
  storageBucket: "authenticationn-7ca03.appspot.com",
  messagingSenderId: "832091001433",
  appId: "1:832091001433:web:3f666b18bc2d6509c85748",
  measurementId: "G-RNJXR3LEDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export default app ;