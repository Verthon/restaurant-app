import * as React from "react"
import format from "date-fns/format"
import emailjs from "emailjs-com"
import { useMutation } from "react-query"

import { ERROR_MSG } from "constants/messages"
import { Button } from "ui/Button/Button"
import { useBookingState } from "hooks/useBooking/useBooking"
import { useNotification } from "hooks/useNotification/useNotification"
import Form from "components/Form"
import { getEmailActionUrl } from "utils/helpers"
import { addBooking } from "lib/supabase/supabaseClient"
import { DATE_HOUR_FORMAT } from "constants/dates"

import { Props } from "./ReviewBookingForm.types"
import type { BookingPayload } from "types/booking"

export const ReviewBookingForm = ({ handleEdit, toggleModal, editable = false }: Props) => {
  const mutation = useMutation((booking: BookingPayload) => {
    return addBooking(booking)
  })
  const booking = useBookingState()
  const showNotification = useNotification()

  const sendEmail = async () => {
    const templateParams = {
      name: booking.name,
      email: booking.email,
      guests: booking.guests,
      date: format(booking.date, DATE_HOUR_FORMAT),
    }
    try {
      await emailjs.send("gmail-alkinoos", "reservation", templateParams, process.env.NEXT_PUBLIC_EMAIL_API_KEY)
      toggleModal(true)
    } catch (_error) {
      showNotification({ type: "error", message: ERROR_MSG.emailSendFail })
    }
  }

  const createBooking = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>
  ) => {
    try {
      e.preventDefault()

      if (booking) {
        const submitBooking = { ...booking }
        mutation.mutate({
          email: submitBooking.email,
          name: submitBooking.name,
          date: format(submitBooking.date, "yyyy-MM-dd"),
          time: format(submitBooking.date, "hh:mm:ss"),
          guests: submitBooking.guests,
        })
        sendEmail()
      }
    } catch (_error) {
      showNotification({ type: "error", message: ERROR_MSG.emailDuplicated })
    }
  }

  if (editable) {
    return (
      <>
        <div className="review-booking__form">
          <Form
            booking={booking}
            handleSubmit={createBooking}
            submitBtn={false}
            cssClass="form--edit"
            action={getEmailActionUrl(booking.email)}
            withBookingDesc={true}
          />
        </div>
        <footer className="review-booking__footer review-booking__footer--edit">
          <form onSubmit={createBooking}>
            <Button variant="light" size="regular" type="submit" loading={mutation.isLoading}>
              Confirm Booking
            </Button>
          </form>
        </footer>
      </>
    )
  }

  return (
    <form onSubmit={createBooking}>
      <Button variant="transparent" size="regular" type="button" onClick={handleEdit}>
        Edit booking
      </Button>
      <Button variant="light" size="regular" type="submit" loading={mutation.isLoading}>
        Confirm Booking
      </Button>
    </form>
  )
}
