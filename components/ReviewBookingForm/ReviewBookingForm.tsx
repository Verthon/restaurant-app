import React from "react"
import dayjs from "dayjs"
import emailjs from "emailjs-com"
import { gql, useMutation } from "@apollo/client"

import { ERROR_MSG } from "constants/messages"
import { Button } from "ui/Button/Button"
import { useBookingState } from "hooks/useBooking/useBooking"
import { Props } from "./ReviewBookingForm.types"
import Form from "components/Form"
import { getEmailActionUrl } from "utils/helpers"
import { showErrorNotification } from "utils/notification"
import { FORMAT } from "constants/dates"

const ADD_BOOKING = gql`
  mutation($email: String!, $name: String!, $date: timestamptz!, $guests: smallint!) {
    insert_bookings(objects: { email: $email, name: $name, date: $date, guests: $guests }) {
      affected_rows
      returning {
        id
      }
    }
  }
`

const UPDATE_BOOKING = gql`
  mutation($id: Int!) {
    update_bookings(_set: { confirmed: true }, where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`

export const ReviewBookingForm = ({ handleEdit, toggleModal, editable = false }: Props) => {
  const [addBooking, { data, loading }] = useMutation(ADD_BOOKING)
  const [updateBooking, { loading: updateLoading }] = useMutation(UPDATE_BOOKING)
  const booking = useBookingState()

  const handleEmailSend = async (id: number) => {
    const templateParams = {
      name: booking.name,
      email: booking.email,
      guests: booking.guests,
      date: dayjs(booking.date as Date).format(FORMAT),
    }
    try {
      await emailjs.send("gmail-alkinoos", "reservation", templateParams, process.env.NEXT_PUBLIC_EMAIL_API_KEY)
      await updateBooking({ variables: { id } })
      toggleModal(true)
    } catch (error) {
      showErrorNotification(ERROR_MSG.emailSendFail)
    }
  }

  const handleBookingSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>
  ) => {
    try {
      e.preventDefault()

      if (booking) {
        const submitBooking = { ...booking }
        await addBooking({
          variables: {
            email: submitBooking.email,
            name: submitBooking.name,
            date: submitBooking.date,
            guests: submitBooking.guests,
          },
        })
        const id = data.insert_bookings.returning[0].id
        await handleEmailSend(id)
      }
    } catch (error) {
      showErrorNotification(error || ERROR_MSG.emailDuplicated)
    }
  }

  if (editable) {
    return (
      <>
        <div className="review-booking__form">
          <Form
            booking={booking}
            handleSubmit={handleBookingSubmit}
            submitBtn={false}
            cssClass="form--edit"
            action={getEmailActionUrl(booking.email)}
            withBookingDesc={true}
          />
        </div>
        <footer className="review-booking__footer review-booking__footer--edit">
          <form onSubmit={handleBookingSubmit}>
            <Button variant="light" size="regular" type="submit" loading={loading || updateLoading}>
              Confirm Booking
            </Button>
          </form>
        </footer>
      </>
    )
  }

  return (
    <form onSubmit={handleBookingSubmit}>
      <Button variant="transparent" size="regular" type="button" onClick={handleEdit}>
        Edit booking
      </Button>
      <Button variant="light" size="regular" type="submit" loading={loading || updateLoading}>
        Confirm Booking
      </Button>
    </form>
  )
}
