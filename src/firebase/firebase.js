import firebase from "firebase";

const app1 = firebase.initializeApp({
  //data1 here
});

const db = app1.firestore();
const storage = app1.storage();

export { db, storage };
