import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyBBPxe8Q1X629GkhMZbvqTe194RRsndMe8",
    authDomain: "fir-project-84887.firebaseapp.com",
    projectId: "fir-project-84887",
    storageBucket: "fir-project-84887.appspot.com",
    messagingSenderId: "855331610048",
    appId: "1:855331610048:web:844037482a0ae67ef03c25"
  };

  const app = initializeApp(firebaseConfig);

  export function getFirebase(){
    return app
  }
  export function getFireDb(){
    return getFirestore(app)
  }