import  firebase from 'firebase';

const firebaseApp  = firebase.initializeApp({
  
    apiKey: "AIzaSyA9rVUMF8y7auXGDRpV3WBYDdRFdoDhciU",
    authDomain: "messenger-7a451.firebaseapp.com",
    databaseURL: "https://messenger-7a451.firebaseio.com",
    projectId: "messenger-7a451",
    storageBucket: "messenger-7a451.appspot.com",
    messagingSenderId: "1067679839883",
    appId: "1:1067679839883:web:a5e1a3f15a65e52bb7868e",
    measurementId: "G-0TQTMFG1EN"
  
});
  
const db = firebaseApp.firestore();

export default db;
