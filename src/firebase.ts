import * as firebase from 'firebase'
import { resolve } from 'dns'

const config = {
  apiKey: "AIzaSyD7sQn6Xp-L7q9oCqoEjQYLP6MscaQyBlA",
  authDomain: "estudo-firebase-e64f6.firebaseapp.com",
  databaseURL: "https://estudo-firebase-e64f6.firebaseio.com",
  projectId: "estudo-firebase-e64f6",
  storageBucket: "estudo-firebase-e64f6.appspot.com",
  messagingSenderId: "376594799554",
  appId: "1:376594799554:web:0af3c32ccc766d340b545b",
  measurementId: "G-VWDPCDYLB5"
  }
firebase.initializeApp(config)
firebase.analytics();
