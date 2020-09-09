import React from 'react'
import Router from './components/Router'
import { BookingModalController } from './context/bookingModal/BookingModalController'
import { CompanyDataController } from './context/companyData/CompanyDataController'
import { BookingDataController } from './context/bookingData/BookingDataController'
import { AuthController } from './context/auth/AuthController'

export const App = () => {
  return (
    <AuthController>
      <CompanyDataController>
        <BookingDataController>
          <BookingModalController>
            <Router />
          </BookingModalController>
        </BookingDataController>
      </CompanyDataController>
    </AuthController>
  )
}
