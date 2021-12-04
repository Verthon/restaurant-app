import * as React from "react"
import { AnimatePresence } from "framer-motion"
import { Hydrate, QueryClient, QueryClientProvider } from "react-query"
import type { AppProps } from "next/app"

import { BookingModalController } from "context/bookingModal/BookingModalController"
import { CompanyDataController } from "context/companyData/CompanyDataController"
import { BookingController } from "context/booking/BookingController"

import "../styles/index.scss"

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CompanyDataController>
          <BookingController>
            <BookingModalController>
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} />
              </AnimatePresence>
            </BookingModalController>
          </BookingController>
        </CompanyDataController>
      </Hydrate>
    </QueryClientProvider>
  )
}
