import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxcRVEvYUoeW3vpvWWAxdANPfx6FrG91g",
  authDomain: "evernoteclone-ca5ff.firebaseapp.com",
  projectId: "evernoteclone-ca5ff",
  storageBucket: "evernoteclone-ca5ff.appspot.com",
  messagingSenderId: "67070069388",
  appId: "1:67070069388:web:438cbe12d26df577e5c9a9",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
