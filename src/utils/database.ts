

type OrderByDirection = 'desc' | 'asc';

export type Order = {
  name: string,
  type: OrderByDirection
}

export const getData = (snapshot: firebase.firestore.QuerySnapshot) => {
  return snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
}
