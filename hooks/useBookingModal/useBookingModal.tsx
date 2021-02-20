import React from "react"

import { BookingModalStateContext } from "context/bookingModal/BookingModalContext"
import { BookingModalDispatchContext } from "context/bookingModal/BookingModalContext"

export const useBookingModalDispatch = () => {
  const context = React.useContext(BookingModalDispatchContext)

  if (context === undefined) {

    throw new Error('useCountState must be used within a CountProvider')

  }

  return context
}

export const useBookingModalState = () => {
  const context = React.useContext(BookingModalStateContext)

  if (context === undefined) {

    throw new Error('useCountState must be used within a CountProvider')

  }

  return context
}