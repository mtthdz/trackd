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
 * @returns fireBaseUser
 *
 * - nested function within ../pages/Login > auth
 * - this function will run the Firebase API to authenticate Gmail users
 * - once the user has been authenticated, the preceding getUser() will
 *   send the user's object to the MongoDB server
 */
export const SignInWithGoogle = async () => {
  try{
    const firebaseUser = await signInWithPopup(auth, provider);
    console.log(firebaseUser.user.uid);
    return firebaseUser;

  } catch(error) {
    return error;
  }
}

export const SignOutWithGoogle = () => {
  signOut(auth).then(() => {
    return 'signed out';
  })
  .catch((err) => {
    return err;
  })
}