import db from '../firebase'

export const getOfflineData = async (name, callback) => {
  return db.collection(name).onSnapshot(
    { includeMetadataChanges: true },
    callback
  )
}

export const getCollection = async (name) => {
  return db.collection(name).get()
}

export const getCollectionWithOptions = async (name, order = { name: 'id', type: 'desc' }, limit = 20) => {
  return db.collection(name).orderBy(order.name, order.type).limit(limit).get()
}

export const getData = (snapshot) => {
  return snapshot.docs.map((doc) => doc.data())
}
