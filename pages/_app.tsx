import { AppProps } from 'next/app'

import { BookingModalController } from "context/bookingModal/BookingModalController";
import { CompanyDataController } from "context/companyData/CompanyDataController";
import { BookingController } from "context/booking/BookingController";

import "../styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CompanyDataController>
      <BookingController>
        <BookingModalController>
          <Component {...pageProps} />
        </BookingModalController>
      </BookingController>
    </CompanyDataController>
  );
}
