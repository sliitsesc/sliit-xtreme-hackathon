import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDenaDMRnVj-0Y6tLGuZQspt1K-w4eMBig",
  authDomain: "leaderboard-db2.firebaseapp.com",
  projectId: "leaderboard-db2",
  storageBucket: "leaderboard-db2.appspot.com",
  messagingSenderId: "618541405851",
  appId: "1:618541405851:web:03b524fc96018dec3d183e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;