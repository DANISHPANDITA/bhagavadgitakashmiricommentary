import firebase from "firebase";

const app1 = firebase.initializeApp({
  apiKey: "AIzaSyAndNMqtOaDnYUqrj5_q5ZsWkseJBgN6ko",
  authDomain: "gitabysharnagat.firebaseapp.com",
  projectId: "gitabysharnagat",
  storageBucket: "gitabysharnagat.appspot.com",
  messagingSenderId: "1035625735608",
  appId: "1:1035625735608:web:63401335da233210addb4d",
  measurementId: "G-10STPRR9H9",
});

const db = app1.firestore();
const storage = app1.storage();

export { db, storage };
