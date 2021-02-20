import React from 'react'

import { BookingStateContext } from "context/booking/BookingDataContext"
import { BookingDispatchContext } from "context/booking/BookingDataContext"

export const useBookingDispatch = () => {
  const context = React.useContext(BookingDispatchContext)

  if (context === undefined) {

    throw new Error('useBookingDispatch must be used within a BookingProvider')

  }

  return context
}

export const useBookingState = () => {
  const context = React.useContext(BookingStateContext)

  if (context === undefined) {

    throw new Error('useBookingState must be used within a BookingProvider')

  }

  return context
}
