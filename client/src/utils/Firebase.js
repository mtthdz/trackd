// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

export const SignOutWithGoogle = () => {
  signOut(auth).then(() => {
    console.log('signed out');
    return 'signed out';
  }).catch((error) => {
    return error;
  })
}