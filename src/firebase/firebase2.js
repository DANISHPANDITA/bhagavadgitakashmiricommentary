import firebase from "firebase";

const app2 = firebase.initializeApp(
  {
    //second data here
  },
  "secondary"
);

const db1 = app2.firestore();
const storage1 = app2.storage();

export { db1, storage1 };
