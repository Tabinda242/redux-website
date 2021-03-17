import firebase from 'firebase/app';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyAxJzp7FmU9hxXEqBJCXlRnyQlaLNzfzg0",
    authDomain: "redux-website.firebaseapp.com",
    projectId: "redux-website",
    storageBucket: "redux-website.appspot.com",
    messagingSenderId: "520168247272",
    appId: "1:520168247272:web:cb4cd763096c0c8dddde5d",
    measurementId: "G-MCDL301KSX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }