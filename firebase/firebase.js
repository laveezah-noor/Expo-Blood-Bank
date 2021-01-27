import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyDUcBqp52ztZCoMDRQPMFDTAfCMXd6pNUg",
    authDomain: "olx-clone-3b7f9.firebaseapp.com",
    databaseURL: "https://olx-clone-3b7f9.firebaseio.com",
    projectId: "olx-clone-3b7f9",
    storageBucket: "olx-clone-3b7f9.appspot.com",
    messagingSenderId: "1037158318899",
    appId: "1:1037158318899:web:e4969d1dd32d19b749f446",
    measurementId: "G-NX6838XJD4"
  };
// Initialize Firebase
var Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;