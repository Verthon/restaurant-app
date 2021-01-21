import React from 'react'
import Router from './components/Router'
import { ApolloProvider } from '@apollo/client'
import { Auth0Provider } from '@auth0/auth0-react'

import { client } from './apolloClient'
import { BookingModalController } from './context/bookingModal/BookingModalController'
import { CompanyDataController } from './context/companyData/CompanyDataController'
import { BookingDataController } from './context/bookingData/BookingDataController'

export const App = () => {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN!}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
      redirectUri={window.location.origin}
    >
      <ApolloProvider client={client}>
        <CompanyDataController>
          <BookingDataController>
            <BookingModalController>
              <Router />
            </BookingModalController>
          </BookingDataController>
        </CompanyDataController>
      </ApolloProvider>
    </Auth0Provider>
  )
}
