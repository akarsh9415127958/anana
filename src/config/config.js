import firebase from 'firebase'
require ('@firebase/firestore');
import auth from '@react-native-firebase/auth';
import * as Updates from 'expo-updates';
  var firebaseConfig = {
    apiKey: "AIzaSyBjDy7ah5Lo1E4osfZy4BhwylQF10ufhIw",
    authDomain: "anana-e077f.firebaseapp.com",
    projectId: "anana-e077f",
    storageBucket: "anana-e077f.appspot.com",
    messagingSenderId: "217324683044",
    appId: "1:217324683044:web:0eb6136516499779263db1",
    measurementId: "G-86TR4BL46F"
  };
  // Initialize Firebase
  if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();