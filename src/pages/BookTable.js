import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import { DataContext } from '../components/DataContext'
import { useCompanyData } from '../hooks/useCompanyData'
import { ADD_BOOKING } from '../reducer'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Spinner from '../components/Spinner'
import bookTableImg from '../assets/images/brooke-lark-book-table.jpg'
import { DATEPICKER_CONFIG, pageTransitions } from '../constants/config'
import { REVIEW_BOOKING } from '../constants/routes'
import {
  getTomorrowsDate,
  transformLocalStorageData,
  loadLocalStorageState,
  saveLocalStorageState,
  isDateCurrent
} from '../utils/helpers'

const BookTable = ({ history }) => {
  const [booking, setBooking] = useState({
    date: getTomorrowsDate(),
    guests: 1,
    name: '',
    email: '',
    confirmed: false
  })
  const { hours, location, contact, isLoading } = useCompanyData()
  const { dispatch } = useContext(DataContext)
  useEffect(() => {
    const data = loadLocalStorageState('booking')
    if (data && isDateCurrent(data.booking.date)) {
      handleLocalStorageRead(data)
    }
  }, [])

  const handleLocalStorageRead = (data) => {
    setBooking(transformLocalStorageData(data.booking))
  }

  const onHandleChange = (e) => {
    if (e.target.name === 'guests') {
      const value = parseInt(e.target.value)
      setBooking({ ...booking, [e.target.name]: value })
      return
    }
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }

  const onHandleDate = (e) => {
    setBooking({ ...booking, date: e })
  }

  const onHandleSubmit = (e) => {
    e.preventDefault()
    saveLocalStorageState({ booking: booking })
    const action = { type: ADD_BOOKING, booking: booking }
    dispatch(action)
    history.push({ pathname: REVIEW_BOOKING })
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <ToastContainer />
      <motion.div
        initial="exit"
        animate="enter"
        exit="exit"
        className="table-booking"
      >
        <Navbar />
        <motion.div variants={pageTransitions} className="row container">
          <div className="section section__col">
            <h2 className="table-booking__subtitle">Make a reservation</h2>
            <Form
              handleSubmit={onHandleSubmit}
              handleChange={onHandleChange}
              handleDate={onHandleDate}
              booking={booking}
              config={DATEPICKER_CONFIG}
              withBookingDesc={true}
              submitBtn
            />
          </div>
          {!isLoading ? (
            <article className="section section__col">
              <h2 className="table-booking__subtitle">Located in London</h2>
              <p>{location.address}</p>
              <p>
                {location.city}, {location.province}, {location.code}
              </p>
              <p>{contact.phone}</p>

              <h2 className="table-booking__subtitle">Hours of operation</h2>
              <p>
                {hours.weekdays.days} {hours.weekdays.time}
              </p>
              <p>
                {hours.weekend.days} {hours.weekend.time}
              </p>
            </article>
          ) : null}
          <div className="section section__col table-booking__image">
            <picture>
              <img src={bookTableImg} alt="" className="table-booking__image" />
            </picture>
          </div>
        </motion.div>
        <footer className="table-booking__footer" />
      </motion.div>
    </>
  )
}

BookTable.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func })
}

BookTable.defaultProps = {
  history: {}
}

export default BookTable
