import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAXxg0shv7zheBNvBIBZAep70ifJC3hcVE',
  authDomain: 'dbadminweb.firebaseapp.com',
  databaseURL: 'https://dbadminweb-default-rtdb.firebaseio.com/',
  projectId: 'dbadminweb',
  storageBucket: 'dbadminweb.appspot.com',
  messagingSenderId: '72331695996',
  appId: '1:72331695996:web:aabeaf0a47becf1bc1b6f9'
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
