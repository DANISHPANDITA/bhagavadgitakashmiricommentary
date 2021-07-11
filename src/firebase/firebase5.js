import firebase from "firebase";

const app5 = firebase.initializeApp(
  {
//data here
  },
  "secondary3"
);

const db4 = app5.firestore();
const storage4 = app5.storage();

export { db4, storage4 };
