/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import dayjs from 'dayjs';
import emailjs from 'emailjs-com'

import { BookingDataContext } from '../../context/bookingData/BookingDataContext';
import { ReviewBooking } from './ReviewBooking';
import { notifyError } from '../../utils/notification';
import { DB_ERROR_MSG } from '../../constants/toastMessages';
import { Booking } from '../../context/bookingData/BookingDataContext.types';
import { convertToDate } from '../../utils/helpers';

const ADD_BOOKING = gql`
  mutation AddBooking($booking){
    insert_booking(objects: $booking) {
      affected_rows
      returning {
        id
        created_at
      }
    }
  }
`

export const ReviewBookingContainer = () => {
  const [insert_booking] = useMutation(ADD_BOOKING)
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

  const handleEmailSend = () => {
    const templateParams = {
      name: bookingData?.booking.name,
      email: bookingData?.booking.email,
      guests: bookingData?.booking.guests,
      date: dayjs(bookingData?.booking.date).format('DD-MMMM-YYYY HH:mm')
    }
    emailjs.send('gmail-alkinoos', 'reservation', templateParams, process.env.REACT_APP_DEV_EMAIL_API_KEY).then(
      response => {
        handleModal()
      },
      err => {
        console.error('FAILED...', err)
      }
    )
  }

  const handleBookingSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    if (bookingData?.setBooking) {
      const submitBooking = { ...bookingData?.booking }
      await insert_booking({ variables: {booking: submitBooking} })
      handleEmailSend()
      console.log('submitBooking', JSON.stringify(submitBooking));
    }
  }

  if (bookingData?.handleBookingChange && bookingData.handleDateChange) {
    return <ReviewBooking onSubmit={handleBookingSubmit} bookingData={{...bookingData}} show={show} editable={editable} handleBookingEdit={handleBookingEdit} />
  }

  return (
    <div></div>
  );
};