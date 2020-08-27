import React from 'react'
import { DataContext, contextData } from './components/DataContext'
import Router from './components/Router'


const App = () => {
  return (
    <DataContext.Provider value={contextData}>
      <Router />
    </DataContext.Provider>
  )
}

export default App
