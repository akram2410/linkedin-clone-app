import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDY4lOpS8AFavutw14a3YGoafjlPS-YOws",
  authDomain: "linkedin-clone-c04e0.firebaseapp.com",
  projectId: "linkedin-clone-c04e0",
  storageBucket: "linkedin-clone-c04e0.appspot.com",
  messagingSenderId: "528217413449",
  appId: "1:528217413449:web:de1bee487eaf6aeac46c98",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
