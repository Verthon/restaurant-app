import { getTomorrowsDate } from "../utils/helpers";

export const INITIAL_BOOKING_STATE = {
  date: getTomorrowsDate(),
  guests: 1,
  name: '',
  email: '',
  confirmed: false
}

export type INITIAL_BOOKING_STATE_TYPE = typeof INITIAL_BOOKING_STATE