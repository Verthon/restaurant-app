import { firebase } from '../firebase'

export const auth = firebase.auth()

export const login = async (email: string, password: string) => {
  return await firebase.auth().signInWithEmailAndPassword(email, password)
}

export const logout = async () => {
  return await firebase.auth().signOut()
}
