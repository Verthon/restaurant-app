import { BookingModalController } from "context/bookingModal/BookingModalController";
import { CompanyDataController } from "context/companyData/CompanyDataController";
import { BookingDataController } from "context/bookingData/BookingDataController";

import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <CompanyDataController>
      <BookingDataController>
        <BookingModalController>
          <Component {...pageProps} />
        </BookingModalController>
      </BookingDataController>
    </CompanyDataController>
  );
}
