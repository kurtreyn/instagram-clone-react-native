import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAmkAG767zqZ_GeW-VeXip1fMJ0uGum-VA',
  authDomain: 'instagram-clone-rn-b1f0a.firebaseapp.com',
  projectId: 'instagram-clone-rn-b1f0a',
  storageBucket: 'instagram-clone-rn-b1f0a.appspot.com',
  messagingSenderId: '1067727526403',
  appId: '1:1067727526403:web:ee26705be9f847b3390c36',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();

export { firebase, db };
