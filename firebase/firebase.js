import * as firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import 'firebase/database';

  var firebaseConfig = {
    apiKey: "AIzaSyDApEnCT3tUYalndkMddBqu3xLzcehKR4A",
    authDomain: "blood-bank-d2244.firebaseapp.com",
    databaseURL: "https://blood-bank-d2244-default-rtdb.firebaseio.com",
    projectId: "blood-bank-d2244",
    storageBucket: "blood-bank-d2244.appspot.com",
    messagingSenderId: "271455233374",
    appId: "1:271455233374:web:ad723ff0b0396eae199bcf",
    measurementId: "G-QR13FGB7KE"
  };
  if (firebase.apps.length === 0) {
    var Firebase = firebase.initializeApp(firebaseConfig);
    export default Firebase;
  }
