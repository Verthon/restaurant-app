import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyCGk9d9hxN5KUGbgjlgqAaXdEXRe6Fysuw' || process.env.FIRESTORE_API_KEY,
  authDomain: process.env.FIRESTORE_AUTH_DOMAIN,
  projectId: 'restaurant-app-d4b51',
  databaseURL: process.env.FIRESTORE_DATABASE_URL
}

firebase.initializeApp(config)
firebase.firestore().enablePersistence()
const db = firebase.firestore()

export { firebase }

export default db
