import { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { AnimatePresence } from "framer-motion"

import { useApollo } from "lib/apollo/apolloClient"
import { BookingModalController } from "context/bookingModal/BookingModalController"
import { CompanyDataController } from "context/companyData/CompanyDataController"
import { BookingController } from "context/booking/BookingController"

import "../styles/index.scss"
import { FirebaseContextController } from "lib/firebase-admin/auth"

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)
  return (
    <ApolloProvider client={apolloClient}>
      <FirebaseContextController>
        <CompanyDataController>
          <BookingController>
            <BookingModalController>
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} />
              </AnimatePresence>
            </BookingModalController>
          </BookingController>
        </CompanyDataController>
      </FirebaseContextController>
    </ApolloProvider>
  )
}
