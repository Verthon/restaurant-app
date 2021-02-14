import React from 'react'

import { BookingDataState } from "context/bookingData/BookingDataContext"

export const useBookingState = () => {

  const context = React.useContext(BookingDataState)

  if (context === undefined) {

    throw new Error('useBookingState must be used within a CountProvider')

  }

  return context
}