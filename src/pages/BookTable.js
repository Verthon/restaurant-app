import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import { DataContext } from '../components/DataContext'
import { ADD_BOOKING } from '../reducers/booking'
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
  const [loading, setLoading] = useState(true)
  const [booking, setBooking] = useState({
    date: getTomorrowsDate(),
    people: 1,
    name: '',
    email: '',
    confirmed: false
  })
  const [companyData, setCompanyData] = useState({
    hours: null,
    location: null,
    contact: null
  })
  const { state, dispatch } = useContext(DataContext)
  console.log('data context', state)
  useEffect(() => {
    const data = loadLocalStorageState('booking')
    if (data && isDateCurrent(data.booking.date)) {
      handleLocalStorageRead(data)
    }
  }, [])

  useEffect(() => {
    const { location, hours, contact } = state.company
    if (location && hours && contact) {
      const data = state.company
      setCompanyData({
        ...companyData,
        hours: data.hours,
        location: data.location,
        contact: data.contact
      })
      setLoading(false)
    }
  }, [state.company])

  const handleLocalStorageRead = (data) => {
    setBooking(transformLocalStorageData(data.booking))
  }

  const onHandleChange = (e) => {
    if (e.target.name === 'people') {
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
    console.log('booking before submit', booking)
    const action = { type: ADD_BOOKING, booking: booking }
    dispatch(action)
    history.push({ pathname: REVIEW_BOOKING })
  }

  const { contact, location, hours } = companyData

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <ToastContainer />
      <motion.div initial="exit" animate="enter" exit="exit" className="table-booking">
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
              submitBtn
            />
          </div>
          {companyData.location ? (
            <article className="section section__col">
              <h2 className="table-booking__subtitle">Located in London</h2>
              <p>
                {location.address}
              </p>
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
