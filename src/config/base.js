// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv2Yk-f46fG1f6MCKngRwJyhHBIullSx8",
  authDomain: "first-project-f86be.firebaseapp.com",
  projectId: "first-project-f86be",
  storageBucket: "first-project-f86be.appspot.com",
  messagingSenderId: "915520433265",
  appId: "1:915520433265:web:4242ce21ba460b8a88bfd0",
  measurementId: "G-12B0VCS5FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
