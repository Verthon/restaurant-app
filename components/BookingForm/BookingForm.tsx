import React from "react"
import { useRouter } from "next/router"

import Form from "components/Form"
import { useBookingState } from "hooks/useBooking/useBooking"
import { ROUTES } from "constants/routes"
import { StepWizard } from "components/StepWizard/StepWizard"

export const BookingForm = () => {
  const router = useRouter()
  const booking = useBookingState()
  const handleBookingSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    router.push(ROUTES.review)
  }
  const steps = [
    {
      id: 0,
      component: (
        <Form handleSubmit={handleBookingSubmit} booking={booking} withBookingDesc={true} submitBtn action="" />
      ),
      buttons: { next: "Reserve" },
    },
    { id: 1, component: <p>Second</p>, buttons: { prev: "Edit" } },
    { id: 2, component: <p>Finale</p> },
  ]

  return (
    <div>
      <StepWizard steps={steps} hasPrevOnLastStep={true} />
    </div>
  )

  //return <Form handleSubmit={handleBookingSubmit} booking={booking} withBookingDesc={true} submitBtn action="" />
}
