// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth';
import { findUser } from '../api/AuthEndpoint';


// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCt1vi-gIQj10cTTrmvLpsqUl-huXygOqg',
  authDomain: 'trackd-180d9.firebaseapp.com',
  projectId: 'trackd-180d9',
  storageBucket: 'trackd-180d9.appspot.com',
  messagingSenderId: '704881164904',
  appId: '1:704881164904:web:2fa9847d2c1d93d1c071dd'
};

// Initialize Firebase
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};

export const SignInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((res) => {
    const uid = res.user.uid;
    const name = res.user.displayName;
    const email = res.user.email;

    findUser(uid, name, email);

  }).catch((err) => {
    return err;
  });
}

export const SignOutWithGoogle = () => {
  signOut(auth).then(() => {
    console.log('signed out');
    return 'signed out';
  }).catch((err) => {
    return err;
  })
}