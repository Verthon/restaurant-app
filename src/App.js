import React, { useEffect, useState, useReducer, useMemo } from 'react'
import { DataContext } from './components/DataContext'
import { useGetCollection } from './hooks/useGetCollection'
import { reducer, ADD_COMPANY } from './reducer'
import Spinner from './components/Spinner'
import Router from './components/Router'
import { contactInfo } from './constants/contact'

const App = () => {
  const initialState = {
    booking: {
      date: new Date(),
      guests: 1,
      name: 'John Doe',
      email: 'johndoe@xx.ox',
      confirmed: false,
      send: false
    },
    company: contactInfo
  }
  const { data, isLoading } = useGetCollection({ collectionName: 'company' })
  const [companyData, setCompanyData] = useState(initialState.company)
  const [state, dispatch] = useReducer(reducer, initialState)
  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])
  useEffect(() => {
    const controller = new AbortController()
    if (data.length > 0) {
      setCompanyData(data[0].data)
      dispatch({ type: ADD_COMPANY, company: companyData })
    }
    return () => controller.abort()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
  if (isLoading) {
    return <Spinner />
  }
  return (
    <DataContext.Provider value={contextValue}>
      <Router />
    </DataContext.Provider>
  )
}

export default App
