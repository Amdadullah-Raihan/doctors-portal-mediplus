// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsa8TnWGEqPzIZAXqKotB9CCfpymk80eM",
    authDomain: "doctors-portal-mediplus.firebaseapp.com",
    projectId: "doctors-portal-mediplus",
    storageBucket: "doctors-portal-mediplus.appspot.com",
    messagingSenderId: "739471717021",
    appId: "1:739471717021:web:1ece081e04abbf78735a74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;