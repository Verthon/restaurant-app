import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify'
import { DataContext } from '../components/DataContext'
import contactInfo from '../contactInfo'
import { ADD_BOOKING } from '../reducers/booking'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import bookTableImg from '../assets/images/brooke-lark-book-table.jpg'
import { REVIEW_BOOKING } from '../constants/routes'
import {
  getTomorrowsDate,
  transformLocalStorageData,
  loadLocalStorageState,
  saveLocalStorageState,
  isDateCurrent
} from '../helpers'

const BookTable = ({ history }) => {
  const [config, setConfig] = useState({
    startDate: getTomorrowsDate(),
    minTime: 12,
    maxTime: 22
  })

  const [booking, setBooking] = useState({
    date: getTomorrowsDate(),
    people: 1,
    name: '',
    email: '',
    confirmed: false
  })

  const { state, dispatch } = useContext(DataContext)

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
    // sendData(booking)
    history.push({ pathname: REVIEW_BOOKING })
  }

  const notify = () =>
    toast('Offline mode detected. Application is working on cached version')

  const { location, hours } = contactInfo.info

  return (
    <>
      <ToastContainer />
      <div className='table-booking fade-in'>
        <Navbar />
        <div className='row container'>
          <div className='section section__col'>
            <h2 className='table-booking__subtitle'>Make a reservation</h2>
            <Form
              handleSubmit={onHandleSubmit}
              handleChange={onHandleChange}
              handleDate={onHandleDate}
              booking={booking}
              config={config}
              submitBtn
            />
          </div>
          <article className='section section__col'>
            <h2 className='table-booking__subtitle'>Located in London</h2>
            <p>
              {location.street} {location.number}
            </p>
            <p>
              {location.city}, {location.province}, {location.code}
            </p>
            <p>{location.phone}</p>

            <h2 className='table-booking__subtitle'>Hours of operation</h2>
            <p>
              {hours.week.name} {hours.week.time}
            </p>
            <p>
              {hours.weekend.name} {hours.weekend.time}
            </p>
          </article>
          <div className='section section__col table-booking__image'>
            <picture>
              <img src={bookTableImg} alt='' className='table-booking__image' />
            </picture>
          </div>
        </div>
        <footer className='table-booking__footer' />
      </div>
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
