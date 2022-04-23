import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyBYferIOKCmXP2TOgIpwXOxehuuQp99MnE',

  authDomain: 'firegram-ee5bd.firebaseapp.com',

  projectId: 'firegram-ee5bd',

  storageBucket: 'firegram-ee5bd.appspot.com',

  messagingSenderId: '653157955184',

  appId: '1:653157955184:web:8cbc78a29babb53dd7e6b5',
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
