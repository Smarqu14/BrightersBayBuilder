import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBR9-KLUs57jA1evEXNpe5hbiXZ3KGffxc',
  authDomain: 'brighterbaybuilders.firebaseapp.com',
  projectId: 'brighterbaybuilders',
  storageBucket: 'brighterbaybuilders.appspot.com',
  messagingSenderId: '812838614617',
  appId: '1:812838614617:web:f9da610502cd0124a96348',
};

firebase.initializeApp(firebaseConfig);
export default firebase;
