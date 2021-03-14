import React from "react"
import { useRouter } from "next/router"

import Form from "components/Form"
import { useBookingState } from "hooks/useBooking/useBooking"
import { ROUTES } from "constants/routes"

export const BookingForm = () => {
  const router = useRouter()
  const booking = useBookingState()
  const handleBookingSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    router.push(ROUTES.review)
  }

  return <Form handleSubmit={handleBookingSubmit} booking={booking} withBookingDesc={true} submitBtn action="" />
}
