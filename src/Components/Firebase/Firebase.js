// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import{collection, getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtpi_ddifQErhhg4lG5rzNvffxNqaRZY8",
  authDomain: "bloggingweb-85f01.firebaseapp.com",
  projectId: "bloggingweb-85f01",
  storageBucket: "bloggingweb-85f01.appspot.com",
  messagingSenderId: "407850019123",
  appId: "1:407850019123:web:0f0f1c64a761a7f87db646",
  measurementId: "G-90N9TEQNQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const userdata = collection(db ,'Userdata');
export const addblog = collection(db,'Addblog');
export default app;