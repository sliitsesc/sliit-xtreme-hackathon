import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5eZBuviIAjh0VqqBLEF6zKYU5_yF5HVo",
  authDomain: "leaderboard-db-7021f.firebaseapp.com",
  projectId: "leaderboard-db-7021f",
  storageBucket: "leaderboard-db-7021f.appspot.com",
  messagingSenderId: "924799131689",
  appId: "1:924799131689:web:e5882746a74f00f357bc38"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;