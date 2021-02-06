import React from 'react'

import { BookingModalContext } from './BookingModalContext'
import { useBookingModal } from '../../hooks/useBookingModal/useBookingModal'

export const BookingModalController = ({ children }: { children: React.ReactNode }) => {
  const { showModal, toggleModal } = useBookingModal()

  return (
    <BookingModalContext.Provider
      value={{
        showModal,
        toggleModal
      }}
    >
      {children}
    </BookingModalContext.Provider>
  )
}
