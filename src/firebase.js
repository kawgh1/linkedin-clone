import firebase from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyCjPJA-qZxFCDnj6x06NO1KRkXtPK7sPhU",
  
    authDomain: "linkedin-clone-3645e.firebaseapp.com",
  
    projectId: "linkedin-clone-3645e",
  
    storageBucket: "linkedin-clone-3645e.appspot.com",
  
    messagingSenderId: "513616031717",
  
    appId: "1:513616031717:web:b38a13db727cca2b82490c"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // go to the firebase App we just initialized and grab the firestore database attached to it
  // now we have access to the data
  const db = firebaseApp.firestore();

  // access to authentication
  const auth = firebase.auth();

  // so we will export the db and auth variables to access in our code
  export { db, auth };

  // first place we connect to is in our Feed.js

