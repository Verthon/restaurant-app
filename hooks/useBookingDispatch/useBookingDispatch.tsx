import React from 'react'

import { BookingDataDispatch } from "context/bookingData/BookingDataContext"

export const useBookingDispatch = () => {

  const context = React.useContext(BookingDataDispatch)

  if (context === undefined) {

    throw new Error('useBookingState must be used within a CountProvider')

  }

  return context
}