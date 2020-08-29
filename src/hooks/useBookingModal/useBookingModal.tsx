import { useState } from 'react'

export const useBookingModal = () => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return {
    showModal,
    toggleModal
  }
}
