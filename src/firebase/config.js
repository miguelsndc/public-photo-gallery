// Your web app's Firebase configuration
import { firebase } from '@firebase/app';
import '@firebase/storage';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC2SQBRBrjOoVfcJma9hI8Mr6RF9cZYjPo',
  authDomain: 'firegram-dabb3.firebaseapp.com',
  projectId: 'firegram-dabb3',
  storageBucket: 'firegram-dabb3.appspot.com',
  messagingSenderId: '816790096821',
  appId: '1:816790096821:web:f2c645f4399c2e9ca0e7fc',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const _storage = firebase.storage();
const _firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { _storage, _firestore, timestamp };
