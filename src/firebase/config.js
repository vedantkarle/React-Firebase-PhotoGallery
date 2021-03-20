import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAcFTVV8PhO54SZ66m9CvqEteqWdmhGuu8",
  authDomain: "react-firebase-photo-gal-7b0a5.firebaseapp.com",
  projectId: "react-firebase-photo-gal-7b0a5",
  storageBucket: "react-firebase-photo-gal-7b0a5.appspot.com",
  messagingSenderId: "834069141698",
  appId: "1:834069141698:web:89f9b1f3c3a094762b835b",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, db, timestamp };
