import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA-IUP9FSH9pgWlvBCME3GAZIX98MsDDyA",
    authDomain: "foodscape-react-native.firebaseapp.com",
    projectId: "foodscape-react-native",
    storageBucket: "foodscape-react-native.appspot.com",
    messagingSenderId: "112342590467",
    appId: "1:112342590467:web:956acf6bd82c33893e5a36",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
