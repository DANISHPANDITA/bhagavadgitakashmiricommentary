import firebase from "firebase";

const app4 = firebase.initializeApp(
  {
    apiKey: "AIzaSyAoBTPXxaEJLlm-nN-W8zAdsSx2AYLRhls",
    authDomain: "gitabysharnagat4.firebaseapp.com",
    projectId: "gitabysharnagat4",
    storageBucket: "gitabysharnagat4.appspot.com",
    messagingSenderId: "204841749945",
    appId: "1:204841749945:web:423349e2b9c63e6c9b7a68",
    measurementId: "G-7GEFKE4QDD",
  },
  "secondary2"
);
const db3 = app4.firestore();
const storage3 = app4.storage();
export { db3, storage3 };
