import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBniqkDp0UkyOLvpc5eOCebMcKE-LKzFAg",
  authDomain: "leaderboard-db-3.firebaseapp.com",
  projectId: "leaderboard-db-3",
  storageBucket: "leaderboard-db-3.appspot.com",
  messagingSenderId: "1096595444610",
  appId: "1:1096595444610:web:e368adbc59b9ad517eb59b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;