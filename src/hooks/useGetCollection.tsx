import { useEffect, useReducer } from 'react'
import { getData } from '../utils/database'
import { apiReducer } from '../reducers/apiReducer'
import { notifyError } from '../utils/notification'
import { DB_ERROR_MSG } from '../constants/toastMessages'
import { useIsMountedRef } from './useIsMountedRef'

export const useGetCollection = ({ collectionName }: { collectionName: string }) => {
  const [response, dispatch] = useReducer(apiReducer, { data: null, isLoading: false, error: null })
  const isMountedRef = useIsMountedRef()

  return response
}
