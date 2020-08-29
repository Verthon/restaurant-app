import React from 'react'
import Router from './components/Router'
import { BookingModalController } from './context/bookingModal/BookingModalController'
import { CompanyDataController } from './context/companyData/CompanyDataController'


export const App = () => {
  return (
    <CompanyDataController>
      <BookingModalController>
        <Router />
      </BookingModalController>
    </CompanyDataController>
  )
}
