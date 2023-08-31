import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDcHJuGEASw294AYFosczrfidLapWbyRWo",
  authDomain: "todoapp-d3740.firebaseapp.com",
  projectId: "todoapp-d3740",
  storageBucket: "todoapp-d3740.appspot.com",
  messagingSenderId: "110761858449",
  appId: "1:110761858449:web:b9674a81e6ce1449707630"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}

