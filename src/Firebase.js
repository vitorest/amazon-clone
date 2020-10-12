import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA3lKmXEE6WCQqKy4pS50XimzUNwOprvvA",
  authDomain: "clone-b32ef.firebaseapp.com",
  databaseURL: "https://clone-b32ef.firebaseio.com",
  projectId: "clone-b32ef",
  storageBucket: "clone-b32ef.appspot.com",
  messagingSenderId: "703644585918",
  appId: "1:703644585918:web:4dedaae41c6ab25b0cb3ef",
  measurementId: "G-PTFE9FB5ES",
});

const auth = firebase.auth();
export { auth };
