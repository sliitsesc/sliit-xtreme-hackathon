import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr5sHDuUQJXDl9DZKG6WQZx0j0lRI1y3A",
  authDomain: "sliit-xtreme-leaderboard-db391.firebaseapp.com",
  projectId: "sliit-xtreme-leaderboard-db391",
  storageBucket: "sliit-xtreme-leaderboard-db391.appspot.com",
  messagingSenderId: "43532885486",
  appId: "1:43532885486:web:5b59eb38b7f1091bc5c2ff"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;