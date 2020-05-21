import { firebase } from '../firebase'

export const auth = firebase.auth()

export const login = async (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const logout = async () => {
  return firebase.auth().signOut()
}
