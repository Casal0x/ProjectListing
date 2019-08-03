import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyArFQHLWjUH2iwNQg3Oj3yiZ5Sp9Zfbg0M",
    authDomain: "marioapp-3d930.firebaseapp.com",
    databaseURL: "https://marioapp-3d930.firebaseio.com",
    projectId: "marioapp-3d930",
    storageBucket: "marioapp-3d930.appspot.com",
    messagingSenderId: "178918591930",
    appId: "1:178918591930:web:868b1a3196ada741"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;