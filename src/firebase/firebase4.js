import firebase from "firebase";

const app4 = firebase.initializeApp(
  {
   //data here
  },
  "secondary2"
);
const db3 = app4.firestore();
const storage3 = app4.storage();

export { db3, storage3 };
