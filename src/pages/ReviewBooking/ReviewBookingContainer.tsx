/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import dayjs from 'dayjs';
import emailjs from 'emailjs-com'

import { BookingDataContext } from '../../context/bookingData/BookingDataContext';
import { ReviewBooking } from './ReviewBooking';
import { notifyError } from '../../utils/notification';
import { BOOKING_DUPLICATED_EMAIL_MSG, EMAIL_SENDING_FAIL_MSG } from '../../constants/toastMessages';
import { Booking } from '../../context/bookingData/BookingDataContext.types';
import { convertToDate } from '../../utils/helpers';

const ADD_BOOKING = gql`
  mutation ($email: String!, $name: String!, $date: date!, $guests: smallint!) {
    insert_bookings(objects: {email: $email, name: $name, date: $date, guests: $guests}) {
      affected_rows
    }
  }
`

export const ReviewBookingContainer = () => {
  const [addBooking, { loading: mutationLoading, error: mutationError }] = useMutation(ADD_BOOKING)
  const bookingData = useContext(BookingDataContext)
  const [show, toggleModal] = useState(false)
  const [editable, setEditable] = useState(false)

  const handleModal = () => {
    toggleModal(true)
    window.localStorage.removeItem('booking')
  }

  const handleBookingEdit = () => {
    setEditable(true)
  }

  useEffect(() => {
    if (bookingData?.setBooking) {
      const booking: Booking = { ...bookingData?.booking }
      booking.date = convertToDate(booking.date)
      bookingData?.setBooking({ ...booking })
    }
  }, [])

  const handleEmailSend = async () => {
    const templateParams = {
      name: bookingData?.booking.name,
      email: bookingData?.booking.email,
      guests: bookingData?.booking.guests,
      date: dayjs(bookingData?.booking.date).format('DD-MMMM-YYYY HH:mm')
    }
    try {
      await emailjs.send('gmail-alkinoos', 'reservation', templateParams, process.env.REACT_APP_DEV_EMAIL_API_KEY)
      handleModal()
    } catch (error) {
      notifyError(EMAIL_SENDING_FAIL_MSG)
    }
  }

  const handleBookingSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>
  ) => {
    try {
      e.preventDefault()

      if (bookingData?.setBooking) {
        const submitBooking = { ...bookingData?.booking }
        await addBooking({ variables: {email: submitBooking.email, name: submitBooking.name, date: submitBooking.date, guests: submitBooking.guests} })
        console.log('statuses', mutationLoading, mutationError)
        handleEmailSend()
      }
    } catch(error) {
      notifyError(BOOKING_DUPLICATED_EMAIL_MSG)
    }
  }

  if (bookingData?.handleBookingChange && bookingData.handleDateChange) {
    return <ReviewBooking onSubmit={handleBookingSubmit} bookingData={{...bookingData}} show={show} editable={editable} handleBookingEdit={handleBookingEdit} loading={mutationLoading}/>
  }

  return (
    <div></div>
  );
};