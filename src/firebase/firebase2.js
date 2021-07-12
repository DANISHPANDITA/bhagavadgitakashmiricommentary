import firebase from "firebase";

const app2 = firebase.initializeApp(
  {
    apiKey: "AIzaSyBPqHIq5tygmw4S618b6qHCD_SAlJuS7j8",
    authDomain: "gitabysharnagat2.firebaseapp.com",
    projectId: "gitabysharnagat2",
    storageBucket: "gitabysharnagat2.appspot.com",
    messagingSenderId: "1030722557933",
    appId: "1:1030722557933:web:570205983d127d1eeb79e4",
    measurementId: "G-2KGS3LZCDT",
  },
  "secondary"
);

const db1 = app2.firestore();
const storage1 = app2.storage();

export { db1, storage1 };
