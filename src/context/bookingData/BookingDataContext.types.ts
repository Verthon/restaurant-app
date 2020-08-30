import { INITIAL_BOOKING_STATE_TYPE } from "../../constants/booking";

export type BookingData = {
  booking: Booking
  setBooking?: React.Dispatch<React.SetStateAction<INITIAL_BOOKING_STATE_TYPE>>
  handleDateChange?: (date: Date | null, e: React.SyntheticEvent<any, Event> | undefined) => void
  handleBookingChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type Booking = INITIAL_BOOKING_STATE_TYPE