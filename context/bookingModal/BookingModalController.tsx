import React from 'react'

import { Props } from "./BookingModalContext.types"
import { BookingModalStateContext, BookingModalDispatchContext, reducer } from './BookingModalContext'

export const BookingModalController = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, {showModal: false})
  return (
    <BookingModalStateContext.Provider
      value={state}
    >
    <BookingModalDispatchContext.Provider value={dispatch}>
      {children}
    </BookingModalDispatchContext.Provider>  
      
    </BookingModalStateContext.Provider>
  )
}
