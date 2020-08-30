import React, { useContext, useState, useEffect } from 'react';
import dayjs from 'dayjs';
import emailjs from 'emailjs-com'

import { BookingDataContext } from '../../context/bookingData/BookingDataContext';
import { CompanyDataContext } from '../../context/companyData/CompanyDataContext';
import { ReviewBooking } from './ReviewBooking';
import db from '../../firebase';
import { notifyError } from '../../utils/notification';
import { DB_ERROR_MSG } from '../../constants/toastMessages';
import { Booking } from '../../context/bookingData/BookingDataContext.types';
import { convertToDate } from '../../utils/helpers';

export const ReviewBookingContainer = () => {
  const bookingData = useContext(BookingDataContext)
  const company = useContext(CompanyDataContext)
  const { location, contact } = company.companyData
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

  const handleBookingSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    if (bookingData?.setBooking) {
    const submitBooking = { ...bookingData?.booking }
    db.collection('bookings')
      .add({
        email: submitBooking.email,
        name: submitBooking.name,
        date: submitBooking.date,
        guests: submitBooking.guests,
        confirmed: true,
        createdAt: dayjs().format('YYYY-MM-DD HH:mm')
      })
      .then(() => {
        handleEmailSend()
      })
      .catch(err => {
        console.log('Error occurred while saving to database: ', err)
        notifyError(DB_ERROR_MSG)
      })
    }
  }

  if (bookingData?.handleBookingChange && bookingData.handleDateChange) {
    return <ReviewBooking onSubmit={handleBookingSubmit} bookingData={{...bookingData}} show={show} editable={editable} handleBookingEdit={handleBookingEdit} />
  }

  return (
    <div></div>
  );
};