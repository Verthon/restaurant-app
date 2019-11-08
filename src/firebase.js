import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey:
    'AIzaSyCGk9d9hxN5KUGbgjlgqAaXdEXRe6Fysuw' || process.env.FIRESTORE_API_KEY,
  authDomain: process.env.FIRESTORE_AUTH_DOMAIN,
  projectId: 'restaurant-app-d4b51',
  databaseURL: process.env.FIRESTORE_DATABASE_URL
}

firebase.initializeApp(config)
firebase
  .firestore()
  .enablePersistence()
  .catch(function (err) {
    if (err.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      console.log('Offline data only works in one tab')
    } else if (err.code === 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
      console.log('Current browser is not supported by your browser')
    }
  })
const db = firebase.firestore()

export { firebase }

export default db
