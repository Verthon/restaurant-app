// eslint-disable react/jsx-boolean-value
/* eslint-disable react/jsx-handler-names */

import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import { connect, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import contactInfo from '../contactInfo'
import {
  splitDate,
  splitTime,
  formatDate,
  convertToDate,
  getTomorrowsDate,
  getEmailActionUrl
} from '../helpers'
import { DataContext } from '../components/DataContext'
import Modal from '../components/Modal'
import db from '../firebase'
import Form from '../components/Form'
import about from '../assets/images/landing/brooke-lark-about.jpg'

const ReviewBooking = () => {
  const { state, dispatch } = useContext(DataContext)
  const [show, toggleModal] = useState(false)
  const [booking, setBooking] = useState({})
  const [editable, setEditable] = useState(false)
  const [config, setConfig] = useState({
    startDate: getTomorrowsDate(),
    minTime: 12,
    maxTime: 22
  })

  useEffect(() => {
    const booking = { ...state.booking }
    booking.date = convertToDate(booking.date)
    setBooking({ ...booking })
  }, [state])

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

  const notify = () =>
    toast('Offline mode detected. Application is working on cached version')

  const onHandleSubmit = (e) => {
    const submitBooking = { ...booking }
    console.log('booking to submit', submitBooking)
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
        console.log('Error occured while saving to database: ', err)
        notify()
      })
  }

  const { street, number, code, city, province } = contactInfo.info.location
  const { name, people, date } = booking

  return editable ? (
    <>
      <ToastContainer />
      <h1 className='heading review-booking__title'>
        <Link to='/'>{contactInfo.name}</Link>
      </h1>
      <Modal show={show} />
      <article className='review-booking fade-in'>
        <img src={about} alt='' />
        <h2 className='heading review-booking__title'>Edit booking</h2>
        <div className='review-booking__container'>
          <Form
            booking={booking}
            config={config}
            handleChange={onHandleChange}
            handleDate={onHandleDate}
            handleSubmit={onHandleSubmit}
            submitBtn={false}
            cssClass='form--edit'
            action={getEmailActionUrl(booking.email)}
          />
        </div>
        <footer className='review-booking__footer review-booking__footer--edit'>
          <form onSubmit={onHandleSubmit}>
            <button className='btn btn--dark' type='submit'>
              Confirm Booking
            </button>
          </form>
        </footer>
      </article>
    </>
  ) : (
    <>
      <Modal show={show} />
      <h1 className='heading review-booking__title'>
        <Link to='/'>{contactInfo.name}</Link>
      </h1>
      <article className='review-booking fade-in'>
        <img src={about} alt='' />
        <p className='review-booking__client'>
          <strong className='review-booking__name'>{name}</strong> reservation
        </p>
        <div className='row review-booking__container'>
          <div className='section__col section__col--flexible'>
            <p className='review-booking__value'>{people}</p>
            <p className='review-booking__description'>Guests</p>
          </div>
          <div className='section__col section__col--flexible'>
            <p className='review-booking__value'>
              {splitDate(formatDate(convertToDate(date)))}
            </p>
            <p className='review-booking__description'>Date</p>
          </div>
          <div className='section__col section__col--flexible'>
            <p className='review-booking__value'>
              {splitTime(formatDate(convertToDate(date)))}
            </p>
            <p className='review-booking__description'>Time</p>
          </div>
        </div>
        <p className='review-booking__address'>
          {street} {number}
        </p>
        <p className='review-booking__address'>
          {city}, {province}, {code}{' '}
        </p>
        <footer className='review-booking__footer'>
          <form onSubmit={onHandleSubmit}>
            <button
              className='btn btn--light'
              type='button'
              onClick={handleEdit}
            >
              Edit booking
            </button>
            <button className='btn btn--dark' type='submit'>
              Confirm Booking
            </button>
          </form>
        </footer>
      </article>
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
