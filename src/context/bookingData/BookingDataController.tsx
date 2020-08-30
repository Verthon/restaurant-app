import React from 'react'

import { BookingDataContext } from './BookingDataContext'
import { useBooking } from '../../hooks/useBooking/useBooking'

export const BookingDataController = ({ children }: { children: React.ReactNode }) => {
  const { booking, setBooking, handleDateChange, handleBookingChange } = useBooking()

  return (
    <BookingDataContext.Provider
      value={{
        booking,
        setBooking,
        handleDateChange,
        handleBookingChange
      }}
    >
      {children}
    </BookingDataContext.Provider>
  )
}
