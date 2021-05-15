import firebase from "firebase";

const app3 = firebase.initializeApp(
  {
    apiKey: "AIzaSyCWkFm0kL9BeX6WLxWJUGFwmmEepfxZ30k",
    authDomain: "gitabysharnagat3.firebaseapp.com",
    projectId: "gitabysharnagat3",
    storageBucket: "gitabysharnagat3.appspot.com",
    messagingSenderId: "942394603825",
    appId: "1:942394603825:web:accacd9c0688ea9be31810",
    measurementId: "G-RESHRSNE4H",
  },
  "secondary1"
);
const db2 = app3.firestore();
const storage2 = app3.storage();

export { db2, storage2 };
