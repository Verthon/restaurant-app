import React, { useContext } from 'react'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'

import { splitDate, splitTime, formatDate, convertToDate, getEmailActionUrl } from '../../utils/helpers'
import { DATEPICKER_CONFIG, pageTransitions } from '../../constants/config'
import { Modal } from '../../ui/Modal/Modal'
import Form from '../../components/Form'
import about from '../../assets/images/landing/brooke-lark-about.jpg'
import { Button } from '../../ui/Button/Button'
import { BookingDataContext } from '../../context/bookingData/BookingDataContext'
import { Props } from './ReviewBooking.types'
import { useCompanyData } from '../../hooks/useCompanyData/useCompanyData'

export const ReviewBooking = ({onSubmit, editable, show, handleBookingEdit, loading}: Props) => {
  const bookingData = useContext(BookingDataContext)
  const { companyData } = useCompanyData()
  const { location, contact } = companyData

  const { address, code, city, province } = location
  const { name, guests, date, email } = bookingData?.booking || {}

  if (editable && email) {
    return (
      <motion.div className="review-booking" initial="exit" animate="enter" exit="exit">
        <ToastContainer />
        <Modal show={show}>
          <h2 className="heading modal-book__heading">Thank you</h2>
          <p className="text modal-book__text">Thank you for booking reservation.</p>
          <p className="text modal-book__text">We will contact you shortly.</p>
          <footer className="modal-book__footer">
            <Link href="/">
              <a className="btn btn--transparent">Back to Home</a>
            </Link>
            <Link href="/menu">
              <a className="btn btn--light">See Menu</a>
            </Link>
          </footer>
        </Modal>
        <motion.article className="review-booking__content" variants={pageTransitions}>
          <h1 className="heading review-booking__company">
            <Link href="/"><a>{contact.name}</a></Link>
          </h1>
          <img className="review-booking__image" src={about} alt="" />
          <h2 className="review-booking__title">Edit booking</h2>
          <div className="review-booking__form">
            <Form
              booking={bookingData?.booking}
              config={DATEPICKER_CONFIG}
              handleChange={bookingData?.handleBookingChange}
              handleDate={bookingData?.handleDateChange!}
              handleSubmit={onSubmit}
              submitBtn={false}
              cssClass="form--edit"
              action={getEmailActionUrl(email)}
              withBookingDesc={true}
            />
          </div>
          <footer className="review-booking__footer review-booking__footer--edit">
            <form onSubmit={onSubmit}>
              <Button className="btn--light" type="submit" loading={loading}>
                Confirm Booking
              </Button>
            </form>
          </footer>
        </motion.article>
      </motion.div>
    )
  }

  return (
    <>
      <Modal show={show}>
        <h2 className="heading modal-book__heading">Thank you</h2>
        <p className="text modal-book__text">Thank you for booking reservation.</p>
        <p className="text modal-book__text">We will contact you shortly.</p>
        <footer className="modal-book__footer">
          <Link href="/">
            <a className="btn btn--transparent">Back to Home</a>
          </Link>
          <Link href="/menu">
            <a className="btn btn--light">See Menu</a>
          </Link>
        </footer>
      </Modal>
      <motion.div className="review-booking" initial="exit" animate="enter" exit="exit">
        <motion.article className="review-booking__content" variants={pageTransitions}>
          <h1 className="heading review-booking__company">
            <Link href="/"><a>{contact.name}</a></Link>
          </h1>
          <img className="review-booking__image" src={about} alt="" />
          <p className="review-booking__client">
            <strong className="review-booking__name">{name}</strong> reservation
          </p>
          <div className="review-booking__container">
            <div className="section__col section__col--flexible">
              <p className="review-booking__value">{guests}</p>
              <p className="review-booking__description">Guests</p>
            </div>
            <div className="section__col section__col--flexible">
              <p className="review-booking__value">{splitDate(formatDate(convertToDate(date!)))}</p>
              <p className="review-booking__description">Date</p>
            </div>
            <div className="section__col section__col--flexible">
              <p className="review-booking__value">{splitTime(formatDate(convertToDate(date!)))}</p>
              <p className="review-booking__description">Time</p>
            </div>
          </div>
          <p className="review-booking__address">{address}</p>
          <p className="review-booking__address">
            {city}, {province}, {code}{' '}
          </p>
          <footer className="review-booking__footer">
            <form onSubmit={onSubmit}>
              <Button className="btn--transparent" type="button" onClick={handleBookingEdit}>
                Edit booking
              </Button>
              <Button className="btn--light" type="submit" loading={loading}>
                Confirm Booking
              </Button>
            </form>
          </footer>
        </motion.article>
      </motion.div>
    </>
  )
}
