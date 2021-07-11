import firebase from "firebase";

const app3 = firebase.initializeApp(
  {
    //data here
  },
  "secondary1"
);
const db2 = app3.firestore();
const storage2 = app3.storage();

export { db2, storage2 };
