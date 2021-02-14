import React from "react";

import { BookingDataState, BookingDataDispatch } from "./BookingDataContext";
import { useBooking } from "hooks/useBooking/useBooking";

export const BookingDataController = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { booking, handleDateChange, handleBookingChange } = useBooking();

  return (
    <BookingDataState.Provider
      value={{
        booking,
      }}
    >
      <BookingDataDispatch.Provider
        value={{ handleDateChange, handleBookingChange }}
      >
        {children}
      </BookingDataDispatch.Provider>
    </BookingDataState.Provider>
  );
};
