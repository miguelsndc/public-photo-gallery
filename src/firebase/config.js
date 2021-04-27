// Your web app's Firebase configuration
import { firebase } from '@firebase/app';
import '@firebase/storage';
import '@firebase/firestore';

console.log(process.env.PPG_API_KEY);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_PPG_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_PPG_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PPG_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PPG_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PPG_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PPG_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const _storage = firebase.storage();
const _firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { _storage, _firestore, timestamp };
