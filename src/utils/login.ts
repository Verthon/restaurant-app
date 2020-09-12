import { firebase } from '../firebase'

export const auth = firebase.auth()

export const doLogin = async (email: string, password: string) => {
  return await firebase.auth().signInWithEmailAndPassword(email, password)
}

export const doLogout = async () => {
  return await firebase.auth().signOut()
}
