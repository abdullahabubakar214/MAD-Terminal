// auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Update import statement
import app from './firebase';

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const signIn = async (email, password) => {
  try {
    // Sign in existing user
    await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in successfully.');
    return true; // Return true if sign-in is successful
  } catch (error) {
    console.error('Error logging in:', error.code, error.message);
    return false; // Return false if sign-in fails
  }
};

export const signUp = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log('User signed up successfully.');
    return true; // Return true if sign-up is successful
  } catch (error) {
    console.error('Error signing up:', error.code, error.message);
    return false; // Return false if sign-up fails
  }
};

export default auth;
