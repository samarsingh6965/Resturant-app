import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCzzDsG0yDQqxJrfj25VzZdb4wdR2A-gG0",
    authDomain: "lootkart-1ba22.firebaseapp.com",
    databaseURL: "https://lootkart-1ba22-default-rtdb.firebaseio.com",
    projectId: "lootkart-1ba22",
    storageBucket: "lootkart-1ba22.appspot.com",
    messagingSenderId: "397818378219",
    appId: "1:397818378219:web:28be2585b0443c42cb0bae"
  };


const app = getApps.length > 0 ? getApp() :initializeApp(firebaseConfig)

const firestore = getFirestore(app)

const storage = getStorage(app)

export {app ,firestore, storage}