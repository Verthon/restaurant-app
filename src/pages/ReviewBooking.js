import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import contactInfo from '../contactInfo'
import {
  splitDate,
  splitTime,
  formatDate,
  convertToDate,
  getEmailActionUrl
} from '../utils/helpers'
import { DATEPICKER_CONFIG, pageTransitions } from '../constants/config'
import { DataContext } from '../components/DataContext'
import Modal from '../components/Modal/Modal'
import Spinner from '../components/Spinner'
import db from '../firebase'
import Form from '../components/Form'
import about from '../assets/images/landing/brooke-lark-about.jpg'
import { notify } from '../utils/notification'
import { DB_ERROR_MSG } from '../constants/toastMessages'

const ReviewBooking = () => {
  const [loading, setLoading] = useState(true)
  const [companyData, setCompanyData] = useState({
    hours: null,
    location: {},
    contact: null
  })
  const { state } = useContext(DataContext)
  const [show, toggleModal] = useState(false)
  const [booking, setBooking] = useState({})
  const [editable, setEditable] = useState(false)

  useEffect(() => {
    const booking = { ...state.booking }
    const company = { ...state.company }
    booking.date = convertToDate(booking.date)
    setBooking({ ...booking })
    if (company.location) {
      setCompanyData({
        ...companyData,
        hours: company.hours,
        location: company.location,
        contact: company.contact,
        name: company.name
      })
      setLoading(false)
    }
  }, [state.company.location])

  const handleModal = () => {
    toggleModal(true)
    window.localStorage.removeItem('booking')
  }

  const handleEdit = () => {
    setEditable(true)
  }

  const onHandleChange = (e) => {
    if (e.target.name === 'people') {
      setBooking({ ...booking, [e.target.name]: parseInt(e.target.value) })
      return
    }
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }

  const onHandleDate = (e) => {
    setBooking({ ...booking, date: e })
  }

  const onHandleSubmit = (e) => {
    const submitBooking = { ...booking }
    e.preventDefault()
    db.collection('bookings')
      .add({
        email: submitBooking.email,
        name: submitBooking.name,
        date: submitBooking.date,
        guests: submitBooking.people,
        confirmed: true
      })
      .then(() => handleModal())
      .catch((err) => {
        console.log('Error occurred while saving to database: ', err)
        notify(DB_ERROR_MSG)
      })
  }

  const { address, code, city, province } = companyData.location
  const { name, people, date } = booking

  if (loading) {
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
            <Link to="/">{contactInfo.name}</Link>
          </h1>
          <img className="review-booking__image" src={about} alt="" />
          <h2 className="review-booking__title">Edit booking</h2>
          <div className="review-booking__container">
            <Form
              booking={booking}
              config={DATEPICKER_CONFIG}
              handleChange={onHandleChange}
              handleDate={onHandleDate}
              handleSubmit={onHandleSubmit}
              submitBtn={false}
              cssClass="form--edit"
              action={getEmailActionUrl(booking.email)}
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
        <article className="modal-book__content fade-in">
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
        </article>
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
            <Link to="/">{contactInfo.name}</Link>
          </h1>
          <img className="review-booking__image" src={about} alt="" />
          <p className="review-booking__client">
            <strong className="review-booking__name">{name}</strong> reservation
          </p>
          <div className="row review-booking__container">
            <div className="section__col section__col--flexible">
              <p className="review-booking__value">{people}</p>
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
          {companyData.location ? (
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

ReviewBooking.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string,
    search: propTypes.string
  }),
  booking: propTypes.shape({
    name: propTypes.string,
    people: propTypes.number,
    date: propTypes.instanceOf(Date),
    confirmed: propTypes.bool
  })
}

ReviewBooking.defaultProps = {
  location: propTypes.shape({
    pathname: propTypes.string,
    search: propTypes.string
  }),
  name: 'John Doe',
  people: 1,
  date: new Date(),
  email: 'john.doe@gmail.uu',
  confirmed: false
}

export default ReviewBooking
