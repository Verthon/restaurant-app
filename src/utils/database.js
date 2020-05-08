import db, { firebase } from '../firebase'

export const getCollection = async (name) => {
  return db.collection(name).get()
}

export const getData = (snapshot) => {
  return snapshot.docs.map((doc) => doc.data())
}
