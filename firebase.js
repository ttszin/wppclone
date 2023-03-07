import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCR6ZhKsDKUVKwV1h-5Spga7BpEeBBtXgQ",
    authDomain: "whatsapp-clone-ios-andro-23974.firebaseapp.com",
    projectId: "whatsapp-clone-ios-andro-23974",
    storageBucket: "whatsapp-clone-ios-andro-23974.appspot.com",
    messagingSenderId: "152853281314",
    appId: "1:152853281314:web:0f6b4a986ebcc3a832e87b"
  };

    const firebaseApp = firebase.initializeApp(firebaseConfig)
   
    const db = firebase.firestore();

    const auth = firebase.auth();

    const provider = new firebase.auth.GoogleAuthProvider();

    export {auth,provider};
    export default {db};