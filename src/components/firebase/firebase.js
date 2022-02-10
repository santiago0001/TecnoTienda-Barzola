import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCIziyFVe8mX0J4ZrNDO1os5XFlJAYjUDw",
  authDomain: "tecnotiendabarzola.firebaseapp.com",
  projectId: "tecnotiendabarzola",
  storageBucket: "tecnotiendabarzola.appspot.com",
  messagingSenderId: "412906451195",
  appId: "1:412906451195:web:129b661e0a538c6f63005e",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
