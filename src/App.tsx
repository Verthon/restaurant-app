import React from 'react'
import { DataContext, contextData } from './components/DataContext'
import Router from './components/Router'
import { BookingModalController } from './context/bookingModal/BookingModalController'


export const App = () => {
  return (
    <DataContext.Provider value={contextData}>
      <BookingModalController>
        <Router />
      </BookingModalController>
    </DataContext.Provider>
  )
}
