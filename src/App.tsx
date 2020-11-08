import React from 'react'
import Router from './components/Router'
import { ApolloProvider } from '@apollo/client'
import { client } from './apolloClient'
import { BookingModalController } from './context/bookingModal/BookingModalController'
import { CompanyDataController } from './context/companyData/CompanyDataController'
import { BookingDataController } from './context/bookingData/BookingDataController'
import { AuthController } from './context/auth/AuthController'

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthController>
        <CompanyDataController>
          <BookingDataController>
            <BookingModalController>
              <Router />
            </BookingModalController>
          </BookingDataController>
        </CompanyDataController>
      </AuthController>
    </ApolloProvider>
  )
}
