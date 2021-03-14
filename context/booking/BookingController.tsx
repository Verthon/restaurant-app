import React from "react"

import { BookingStateContext, BookingDispatchContext } from "./BookingDataContext"
import { Props } from "./BookingContext.types"
import { reducer } from "./BookingDataContext"
import { INITIAL_BOOKING_STATE } from "constants/booking"

export const BookingController = ({ children }: Props) => {
  const booking = { ...INITIAL_BOOKING_STATE }
  const [state, dispatch] = React.useReducer(reducer, booking)

  return (
    <BookingStateContext.Provider value={state}>
      <BookingDispatchContext.Provider value={dispatch}>{children}</BookingDispatchContext.Provider>
    </BookingStateContext.Provider>
  )
}
