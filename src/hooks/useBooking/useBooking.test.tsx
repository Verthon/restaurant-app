import React, { ReactNode } from 'react'
import { renderHook, act } from '@testing-library/react-hooks'

import { BookingDataContext } from '../../context/bookingData/BookingDataContext'

import { useBooking } from './useBooking'

describe('useBooking', () => {
  const state = {
    booking: {
      date: new Date(),
      guests: 2,
      name: "Robolsky",
      email: "robolsky@validmail.com",
      confirmed: false
    },
    setBooking: jest.fn(),
    handleDateChange: jest.fn(),
    handleBookingChange: jest.fn()
  }

  const wrapper = ({ children }: { children?: ReactNode }) => (
    <BookingDataContext.Provider
      value={state}
    >
      {children}
    </BookingDataContext.Provider>
  )
  test('returns bookinStateContext value', async () => {
    const { result } = renderHook(() => useBooking(), {
      wrapper
    })

    expect(result.current).toEqual(state)
  })

  test('throws error when used outside BookingDataController', async () => {
    const { result } = renderHook(() => useBooking())

    expect(result.error).toEqual(undefined)
  })
})
