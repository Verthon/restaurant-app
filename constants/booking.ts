import { getTomorrowsDate } from "../utils/helpers";

export const INITIAL_BOOKING_STATE = {
  date: getTomorrowsDate(),
  guests: 1,
  name: '',
  email: '',
  confirmed: false
}

export const CURRENT_BOOKING_STATE = {
  id: 1,
  ...INITIAL_BOOKING_STATE
}

export type INITIAL_BOOKING_STATE_TYPE = typeof INITIAL_BOOKING_STATE
export type CURRENT_BOOKING_STATE = typeof CURRENT_BOOKING_STATE