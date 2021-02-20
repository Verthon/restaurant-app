import { Booking } from "constants/booking"
import { CHANGE_DATE, CHANGE_BOOKING, SET_BOOKING } from "./BookingDataContext"
import { ActionChangeBookingType, ActionChangeDateType,  BookingValuePayload, ActionSetBookingType } from "./BookingContext.types"

export const changeDate: ActionChangeDateType = (payload: Date) => ({
  type: CHANGE_DATE,
  payload
})

export const changeBooking: ActionChangeBookingType  = (payload: BookingValuePayload) => ({
  type: CHANGE_BOOKING,
  payload
})

export const setBooking: ActionSetBookingType = (payload: Booking) => ({
  type: SET_BOOKING,
  payload
})