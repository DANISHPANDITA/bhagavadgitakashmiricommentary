import firebase from "firebase";

const app1 = firebase.initializeApp({
  apiKey: "AIzaSyAR0Ey5IrrRxr_zi5pgfS5SU852Ij-MNWs",
  authDomain: "gitajibysharnagat.firebaseapp.com",
  projectId: "gitajibysharnagat",
  storageBucket: "gitajibysharnagat.appspot.com",
  messagingSenderId: "454237493955",
  appId: "1:454237493955:web:be6a4dd2a95255749d6076",
  measurementId: "G-775V2J03N5",
});

const db = app1.firestore();
const storage = app1.storage();

export { db, storage };
