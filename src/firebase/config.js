import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBNvBsy3LwTIEl1t741QVNjAvjlCdvcpBE",
    authDomain: "portfolio-website-87a88.firebaseapp.com",
    projectId: "portfolio-website-87a88",
    storageBucket: "portfolio-website-87a88.appspot.com",
    messagingSenderId: "502637101981",
    appId: "1:502637101981:web:3946e9a3a0e7332a13a574",
    measurementId: "G-0ERLRG1CZM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;