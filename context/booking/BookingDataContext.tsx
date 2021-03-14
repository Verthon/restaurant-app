import React from "react"
import { State, Dispatch, Action } from "./BookingContext.types"

export const CHANGE_DATE = "booking/CHANGE_DATE"
export const CHANGE_BOOKING = "booking/CHANGE_BOOKING"
export const SET_BOOKING = "booking/SET_BOOKING"

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case CHANGE_DATE: {
      return { ...state, date: action.payload }
    }
    case CHANGE_BOOKING: {
      const { name, value } = action.payload
      if (name === "guests") {
        return { ...state, guests: parseInt(value) }
      }

      return { ...state, [name]: value }
    }
    case SET_BOOKING: {
      return { ...action.payload }
    }
    default: {
      throw new Error("Unhandled action type")
    }
  }
}

export const BookingStateContext = React.createContext<State | undefined>(undefined)
export const BookingDispatchContext = React.createContext<Dispatch | undefined>(undefined)
