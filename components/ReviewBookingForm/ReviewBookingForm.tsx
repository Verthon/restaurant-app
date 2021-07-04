import React from "react"
import format from "date-fns/format"
import emailjs from "emailjs-com"
import { gql, useMutation } from "@apollo/client"

import { ERROR_MSG } from "constants/messages"
import { Button } from "ui/Button/Button"
import { useBookingState } from "hooks/useBooking/useBooking"
import { useNotification } from "hooks/useNotification/useNotification"
import Form from "components/Form"
import { getEmailActionUrl } from "utils/helpers"
import { DATE_HOUR_FORMAT } from "constants/dates"

import { Props } from "./ReviewBookingForm.types"

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
  const [addBooking, { loading }] = useMutation(ADD_BOOKING)
  const [updateBooking, { loading: updateLoading }] = useMutation(UPDATE_BOOKING)
  const booking = useBookingState()
  const showNotification = useNotification()

  const sendEmail = async (id: number) => {
    const templateParams = {
      name: booking.name,
      email: booking.email,
      guests: booking.guests,
      date: format(booking.date, DATE_HOUR_FORMAT),
    }
    try {
      await emailjs.send("gmail-alkinoos", "reservation", templateParams, process.env.NEXT_PUBLIC_EMAIL_API_KEY)
      await updateBooking({ variables: { id } })
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
        const { data } = await addBooking({
          variables: {
            email: submitBooking.email,
            name: submitBooking.name,
            date: submitBooking.date,
            guests: submitBooking.guests,
          },
        })

        const id = data.insert_bookings.returning[0].id
        await sendEmail(id)
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
            <Button variant="light" size="regular" type="submit" loading={loading || updateLoading}>
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
      <Button variant="light" size="regular" type="submit" loading={loading || updateLoading}>
        Confirm Booking
      </Button>
    </form>
  )
}
