// firebase.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD4ihJh92VZU3ldHrGHmf5COFC-jSJKVRI",
  authDomain: "first-project-3c315.firebaseapp.com",
  projectId: "first-project-3c315",
  storageBucket: "first-project-3c315.appspot.com",
  messagingSenderId: "931372462108",
  appId: "1:931372462108:web:a91b2dd738bd3fd1b3efd9",
  measurementId: "G-QHYNNRW2MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;