import { Booking } from "constants/booking";
import { CHANGE_DATE, CHANGE_BOOKING, SET_BOOKING } from "./BookingDataContext" 

export type Props = { children: React.ReactNode }
export enum ActionType {
  changeDate = "changeDate",
  changeBooking = "changeBooking",
  setBooking = "setBooking"
}

export type ActionChangeDateType = (payload: Date) => {
  type: typeof CHANGE_DATE,
  payload: Date,
}

export type ActionChangeBookingType = (payload: BookingValuePayload) => {
  type: typeof CHANGE_BOOKING,
  payload: BookingValuePayload
}

export type ActionSetBookingType = (payload: State) => {
  type: typeof SET_BOOKING,
  payload: State
}

export type ChangeDateAction = {
  type: typeof CHANGE_DATE,
  payload: Date,
}

export type BookingValuePayload = {
  name: string,
  value: string
}

export type ChangeBookingAction = {
  type: typeof CHANGE_BOOKING,
  payload: BookingValuePayload
}

export type SetBookingAction = {
  type: typeof SET_BOOKING,
  payload: State
}

export type Action = ChangeDateAction | ChangeBookingAction | SetBookingAction

export type State = Booking;
export type Dispatch = (action: Action) => void