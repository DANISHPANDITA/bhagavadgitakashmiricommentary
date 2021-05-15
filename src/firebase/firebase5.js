import firebase from "firebase";

const app5 = firebase.initializeApp(
  {
    apiKey: "AIzaSyAsra0SrQ33ovzTixa14z9dms565hRutG4",
    authDomain: "gitabysharnagat5.firebaseapp.com",
    projectId: "gitabysharnagat5",
    storageBucket: "gitabysharnagat5.appspot.com",
    messagingSenderId: "577239956819",
    appId: "1:577239956819:web:b73102793e74ff78e675a6",
    measurementId: "G-27QT5Z310W",
  },
  "secondary3"
);

const db4 = app5.firestore();
const storage4 = app5.storage();

export { db4, storage4 };
