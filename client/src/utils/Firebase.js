// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth';
import { getUser } from '../api/AuthEndpoint';


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


/**
 * Auth Process via Firebase Auth & Mongodb
 * 1. log user in via firebase auth
 * 2. grab user's idToken, pass to back end server
 * 3. (back end) verify firebase idToken with Firebase server
 * 4. (back end) return back uid
 * 
 * TODO: return user/crate new user logic; old logic remains within
 * user/find endpoint
 */
export const SignInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((res) => {
    const idToken = res._tokenResponse.idToken;
    
    return getUser(idToken);
  })
  .catch((error) => {
    return error;
  });
}

export const SignOutWithGoogle = () => {
  signOut(auth).then(() => {
    return 'signed out';
  })
  .catch((err) => {
    return err;
  })
}