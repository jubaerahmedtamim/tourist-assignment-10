// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTB2vHLg32idxBvS8K-kNRYUPiPgpGfi0",
  authDomain: "tourist-assignment-10.firebaseapp.com",
  projectId: "tourist-assignment-10",
  storageBucket: "tourist-assignment-10.appspot.com",
  messagingSenderId: "1009429118256",
  appId: "1:1009429118256:web:3da111ffcb29c4087b5cf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;