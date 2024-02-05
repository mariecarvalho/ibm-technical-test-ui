// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQiZ30VueRAWbMifIW2wwl0om4sr-JR8g",
  authDomain: "authentication-technical-test.firebaseapp.com",
  projectId: "authentication-technical-test",
  storageBucket: "authentication-technical-test.appspot.com",
  messagingSenderId: "415955138333",
  appId: "1:415955138333:web:b76959a91a4554b82f93f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }