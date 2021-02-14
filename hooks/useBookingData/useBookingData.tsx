import { useContext } from "react";

import { BookingDataContext } from "context/bookingData/BookingDataContext";

export const useBooingData = () => {
  const context = useContext(BookingDataContext);
}