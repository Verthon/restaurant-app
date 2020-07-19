import db from '../firebase'

type OrderByDirection = 'desc' | 'asc';

export type Order = {
  name: string,
  type: OrderByDirection
}

export const getOfflineData = async (name: string, callback: () => void) => {
  return db.collection(name).onSnapshot(
    { includeMetadataChanges: true },
    callback
  )
}

export const getCollection = async (name: string) => {
  return db.collection(name).get()
}

export const getCollectionWithOptions = async (name: string, order: Order = { name: 'id', type: 'asc' }, limit = 20) => {
  return db.collection(name).orderBy(order.name, order.type).limit(limit).get()
}

export const getData = (snapshot: firebase.firestore.QuerySnapshot) => {
  return snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
}
