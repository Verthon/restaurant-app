import { useEffect, useState } from 'react'
import { getCollection, getData } from '../utils/database'
import db from '../firebase'
import { notifyError } from '../utils/notification'
import { DB_ERROR_MSG } from '../constants/toastMessages'

export const useGetCollection = ({ collectionName }) => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({})
  useEffect(() => {
    db.collection(collectionName).onSnapshot(
      { includeMetadataChanges: true },
      snapshot => snapshot
    )
    try {
      getCollection(collectionName).then(snapshot => {
        setData(getData(snapshot))
        setIsLoading(false)
      })
    } catch (err) {
      setIsLoading(false)
      setError(err)
      notifyError(DB_ERROR_MSG)
      console.log(error)
    }
  }, [error, collectionName])

  return {
    error: error,
    isLoading: isLoading,
    data: data
  }
}
