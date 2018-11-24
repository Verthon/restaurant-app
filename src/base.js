import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCGk9d9hxN5KUGbgjlgqAaXdEXRe6Fysuw",
  authDomain: "restaurant-app-d4b51.firebaseapp.com",
  databaseURL: "https://restaurant-app-d4b51.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());


//Named export 
export {firebaseApp};

export default base;