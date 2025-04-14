// src/Firebase/init.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Dz58eVRUylsjgHoqw33rN3Hz-YUiuTc",
  authDomain: "event-finder-reactfirebase.firebaseapp.com",
  projectId: "event-finder-reactfirebase",
  storageBucket: "event-finder-reactfirebase.firebasestorage.app",
  messagingSenderId: "989989386728",
  appId: "1:989989386728:web:fb29364f028a66195ccc5d",
  measurementId: "G-9DJRRMT689",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export auth to use in your app
export { auth };
export default app;
