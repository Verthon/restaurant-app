import React, { useState, useEffect, useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'
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

const BookTable: React.FC<RouteComponentProps> = ({ history }) => {
  const [booking, setBooking] = useState({
    date: getTomorrowsDate(),
    guests: 1,
    name: '',
    email: '',
    confirmed: false
  })
  const { hours, location, contact, isLoading } = useCompanyData()
  const { dispatch } = useContext(DataContext)
  const links = [
    { name: 'Menu', link: 'menu' },
    { name: 'Book Table', link: 'book-table' }
  ]

  useEffect(() => {
    const data = loadLocalStorageState('booking')
    if (data && isDateCurrent(data.booking.date)) {
      handleLocalStorageRead(data)
    }
  }, [])

  const handleLocalStorageRead = (data: any) => {
    setBooking(transformLocalStorageData(data.booking))
  }

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'guests') {
      const value = parseInt(e.target.value)
      setBooking({ ...booking, [e.target.name]: value })
      return
    }
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }

  const handleDateChange = (date: Date, e: React.SyntheticEvent<any, Event>) => {
    console.log('handleBookingChange date and e', date, e)
    setBooking({ ...booking, date: date })
  }

  const handleBookingSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    saveLocalStorageState({ booking: booking })
    const action = { type: ADD_BOOKING, booking: booking }
    if(dispatch && action) {
      dispatch(action)
    }
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
        <Navbar links={links} hashlink={false} />
        <motion.div
          variants={pageTransitions}
          className="table-booking__wrapper container"
        >
          <div className="section section__col section__col--flexible">
            <h2 className="table-booking__subtitle">Make a reservation</h2>
            <Form
              handleSubmit={handleBookingSubmit}
              handleChange={handleBookingChange}
              handleDate={handleDateChange}
              booking={booking}
              config={DATEPICKER_CONFIG}
              withBookingDesc={true}
              submitBtn
              action=""
            />
          </div>
          {location && contact && hours ? (
            <article className="section section__col section__col--flexible">
              <h2 className="table-booking__subtitle">Located in London</h2>
              <p>{location.address}</p>
              <p>
                {location.city}, {location.province}, {location.code}
              </p>
              <p>{contact.phone}</p>

              <h2 className="table-booking__subtitle">Hours of operation</h2>
              <p>
                {hours.weekdays.days} {hours.weekdays?.time}
              </p>
              <p>
                {hours.weekend.days} {hours.weekend.time}
              </p>
            </article>
          ) : null}
          <div className="section section__col section__col--flexible table-booking__image">
            <picture>
              <img src={bookTableImg} alt="" className="table-booking__image" loading="lazy"/>
            </picture>
          </div>
        </motion.div>
        <footer className="table-booking__footer" />
      </motion.div>
    </>
  )
}

export default BookTable
