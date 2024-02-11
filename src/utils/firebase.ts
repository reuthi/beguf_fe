// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwPCNHN_AKjp6dH15qVqZVV-BmcnMDK0k",
  authDomain: "beguf-43f05.firebaseapp.com",
  projectId: "beguf-43f05",
  storageBucket: "beguf-43f05.appspot.com",
  messagingSenderId: "668030322573",
  appId: "1:668030322573:web:6f68250cab276306285fc4",
  measurementId: "G-XZMG21NLRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;

