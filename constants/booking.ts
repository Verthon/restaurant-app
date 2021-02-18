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

export type INITIAL_BOOKING_STATE_TYPE = {
  date: Date | [Date, Date];
  guests: number;
  name: string;
  email: string;
  confirmed: boolean;
  id?: number;
}
export type CURRENT_BOOKING_STATE = typeof CURRENT_BOOKING_STATE