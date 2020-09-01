import React, { useState } from 'react'
import { INITIAL_BOOKING_STATE } from '../../constants/booking'

export const useBooking = () => {
  const [booking, setBooking] = useState(INITIAL_BOOKING_STATE)
  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'guests') {
      const value = parseInt(e.target.value)
      setBooking({ ...booking, [e.target.name]: value })
      return
    }
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }

  const handleDateChange = (date: Date | null, e: React.SyntheticEvent<any, Event> | undefined) => {
    if (date) {
      setBooking({ ...booking, date: date })
    }
  }

  return {
    booking,
    setBooking,
    handleDateChange,
    handleBookingChange
  }
}
