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

const handleError = error => {
  if (error.code === 'failed-precondition') {
    return {
      message: 'Error',
      description:
        'Multiple tabs open, persistence can only be enabled in one tab at a a time.'
    }
  } else if (error.code === 'unimplemented') {
    return {
      message: 'Error',
      description:
        'The current browser does not support all of the features required to enable persistenc'
    }
  }
}

firebase.initializeApp(config)
firebase
  .firestore()
  .enablePersistence()
  .then(() => firebase.firestore())
  .catch((err) => {
    handleError(err)
    firebase.firestore()
  })
const db = firebase.firestore()

export { firebase }

export default db
