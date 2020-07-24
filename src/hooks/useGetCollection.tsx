import { useEffect, useReducer } from 'react'
import { getCollection, getData } from '../utils/database'
import db from '../firebase'
import { apiReducer } from '../reducers/apiReducer'
import { notifyError } from '../utils/notification'
import { DB_ERROR_MSG } from '../constants/toastMessages'
import { useIsMountedRef } from './useIsMountedRef'

export const useGetCollection = ({ collectionName }: { collectionName: string }) => {
  const [response, dispatch] = useReducer(apiReducer, { data: null, isLoading: false, error: null })
  const isMountedRef = useIsMountedRef()
  useEffect(() => {
    dispatch({ type: 'FETCHING' })
    db.collection(collectionName).onSnapshot({ includeMetadataChanges: true }, snapshot => snapshot)
    try {
      getCollection(collectionName).then(snapshot => {
        const result = getData(snapshot)
        if (isMountedRef.current) {
          dispatch({ type: 'SUCCESS', payload: result })
        }
      })
    } catch (err) {
      dispatch({ type: 'ERROR' })
      notifyError(DB_ERROR_MSG)
      console.error(err)
    }
  }, [collectionName, isMountedRef])

  return response
}
