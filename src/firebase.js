import firebase from "firebase";
import "firebase/firestore";

const cred = {
    apiKey: "AIzaSyDvSnghrhtpIzKs0KJHeK6k60N2ElunMy0",
    authDomain: "todolist-react-a5d02.firebaseapp.com",
    databaseURL: "https://todolist-react-a5d02.firebaseio.com",
    projectId: "todolist-react-a5d02",
    storageBucket: "todolist-react-a5d02.appspot.com",
    messagingSenderId: "656253148670",
    appId: "1:656253148670:web:9c26eae16b12d7f099f4af",
    measurementId: "G-JRNNLMH20E"
};

const firebaseConfig = firebase.initializeApp(cred);

export { firebaseConfig as firebase};
