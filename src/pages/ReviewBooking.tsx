import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import dayjs from 'dayjs'
import { contactInfo } from '../constants/contact'
import {
  splitDate,
  splitTime,
  formatDate,
  convertToDate,
  getEmailActionUrl
} from '../utils/helpers'
import { DATEPICKER_CONFIG, pageTransitions } from '../constants/config'
import { useCompanyData } from '../hooks/useCompanyData'
import { DataContext } from '../components/DataContext'
import Modal from '../components/Modal/Modal'
import Spinner from '../components/Spinner'
import db from '../firebase'
import Form from '../components/Form'
import about from '../assets/images/landing/brooke-lark-about.jpg'
import { notifyError } from '../utils/notification'
import { DB_ERROR_MSG } from '../constants/toastMessages'

type Booking = {
  name: string,
  email: string,
  guests: number,
  date: Date
}

const ReviewBooking: React.FC = () => {
  const { location, isLoading } = useCompanyData()
  const { state } = useContext(DataContext)
  const [show, toggleModal] = useState(false)
  const [booking, setBooking] = useState<Booking>({
    name: '',
    email: '',
    guests: 0,
    date: new Date()
  })
  const [editable, setEditable] = useState(false)

  useEffect(() => {
    const booking: Booking = { ...state.booking }
    booking.date = convertToDate(booking.date)
    setBooking({ ...booking })
  }, [state.booking])

  const handleModal = () => {
    toggleModal(true)
    window.localStorage.removeItem('booking')
  }

  const handleEdit = () => {
    setEditable(true)
  }

  const onHandleChange = (e) => {
    if (e.target.name === 'guests') {
      setBooking({ ...booking, [e.target.name]: parseInt(e.target.value) })
      return
    }
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }

  const onHandleDate = e => {
    setBooking({ ...booking, date: e })
  }

  const handleEmailSend = () => {
    const templateParams = {
      name: booking.name,
      email: booking.email,
      guests: booking.guests,
      date: dayjs(booking.date).format('DD-MMMM-YYYY HH:mm')
    }
    emailjs
      .send(
        'gmail-alkinoos',
        'reservation',
        templateParams,
        process.env.REACT_APP_DEV_EMAIL_API_KEY
      )
      .then(
        response => {
          console.info('SUCCESS!', response.status, response.text)
          handleModal()
        },
        err => {
          console.error('FAILED...', err)
        }
      )
  }

  const onHandleSubmit = e => {
    e.preventDefault()
    const submitBooking = { ...booking }
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

  const { address, code, city, province } = location
  const { name, guests, date } = booking

  if (isLoading) {
    return <Spinner />
  }

  if (editable) {
    return (
      <motion.div
        className="review-booking"
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <ToastContainer />
        <Modal show={show}>
          <h2 className="heading modal-book__heading">Thank you</h2>
          <p className="text modal-book__text">
            Thank you for booking reservation.
          </p>
          <p className="text modal-book__text">We will contact you shortly.</p>
          <footer className="modal-book__footer">
            <Link className="btn btn--tertiary" to="/">
              Back to Home
            </Link>
            <Link className="btn btn--light" to="/menu">
              See Menu
            </Link>
          </footer>
        </Modal>
        <motion.article
          className="review-booking__content"
          variants={pageTransitions}
        >
          <h1 className="heading review-booking__company">
            <Link to="/">{contactInfo.data.name}</Link>
          </h1>
          <img className="review-booking__image" src={about} alt="" />
          <h2 className="review-booking__title">Edit booking</h2>
          <div className="review-booking__form">
            <Form
              booking={booking}
              config={DATEPICKER_CONFIG}
              handleChange={onHandleChange}
              handleDate={onHandleDate}
              handleSubmit={onHandleSubmit}
              submitBtn={false}
              cssClass="form--edit"
              action={getEmailActionUrl(booking.email)}
              withBookingDesc={true}
            />
          </div>
          <footer className="review-booking__footer review-booking__footer--edit">
            <form onSubmit={onHandleSubmit}>
              <button className="btn btn--light" type="submit">
                Confirm Booking
              </button>
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
        <p className="text modal-book__text">
          Thank you for booking reservation.
        </p>
        <p className="text modal-book__text">We will contact you shortly.</p>
        <footer className="modal-book__footer">
          <Link className="btn btn--tertiary" to="/">
            Back to Home
          </Link>
          <Link className="btn btn--light" to="/menu">
            See Menu
          </Link>
        </footer>
      </Modal>
      <motion.div
        className="review-booking"
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <motion.article
          className="review-booking__content"
          variants={pageTransitions}
        >
          <h1 className="heading review-booking__company">
            <Link to="/">{contactInfo.data.name}</Link>
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
              <p className="review-booking__value">
                {splitDate(formatDate(convertToDate(date)))}
              </p>
              <p className="review-booking__description">Date</p>
            </div>
            <div className="section__col section__col--flexible">
              <p className="review-booking__value">
                {splitTime(formatDate(convertToDate(date)))}
              </p>
              <p className="review-booking__description">Time</p>
            </div>
          </div>
          {location ? (
            <>
              <p className="review-booking__address">{address}</p>
              <p className="review-booking__address">
                {city}, {province}, {code}{' '}
              </p>
            </>
          ) : null}
          <footer className="review-booking__footer">
            <form onSubmit={onHandleSubmit}>
              <button
                className="btn btn--tertiary"
                type="button"
                onClick={handleEdit}
              >
                Edit booking
              </button>
              <button className="btn btn--light" type="submit">
                Confirm Booking
              </button>
            </form>
          </footer>
        </motion.article>
      </motion.div>
    </>
  )
}

export default ReviewBooking
