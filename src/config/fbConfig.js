import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA4HxhSG4atjcGarQAszJEGc3VNF3ivwbA",
    authDomain: "planapp-a4155.firebaseapp.com",
    databaseURL: "https://planapp-a4155.firebaseio.com",
    projectId: "planapp-a4155",
    storageBucket: "planapp-a4155.appspot.com",
    messagingSenderId: "1033215505598"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({});

  export default firebase;  