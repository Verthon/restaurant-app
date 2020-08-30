import React, { useState, useEffect, useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import { DataContext } from '../components/DataContext'
import { ADD_BOOKING } from '../reducer'
import { Navbar } from '../ui/Navbar/Navbar'
import Form from '../components/Form'
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
import { CompanyDataContext } from '../context/companyData/CompanyDataContext'
import { BookingDataContext } from '../context/bookingData/BookingDataContext'

const BookTable: React.FC<RouteComponentProps> = ({ history }) => {
  const company = useContext(CompanyDataContext)
  const { hours, location, contact } = company.companyData
  const bookingData = useContext(BookingDataContext)
  // const [booking, setBooking] = useState({
  //   date: getTomorrowsDate(),
  //   guests: 1,
  //   name: '',
  //   email: '',
  //   confirmed: false
  // })
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
    if(bookingData?.setBooking) {
      bookingData.setBooking(transformLocalStorageData(data.booking))
    }
  }

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (bookingData?.setBooking) {
      if (e.target.name === 'guests') {
        const value = parseInt(e.target.value)
        bookingData.setBooking({ ...bookingData.booking, [e.target.name]: value })
        return
      }
      bookingData.setBooking({ ...bookingData.booking, [e.target.name]: e.target.value })
    }
  }

  const handleDateChange = (date: Date | null, e: React.SyntheticEvent<any, Event> | undefined) => {
    console.log('handleBookingChange date and e', date, e)
    if(bookingData?.setBooking) {
      if(date) {
        bookingData?.setBooking({ ...bookingData.booking, date: date })
      }
    }
  }

  const handleBookingSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    saveLocalStorageState({ booking: bookingData?.booking })
    // const action = { type: ADD_BOOKING, booking: booking }
    // if(dispatch && action) {
    //   dispatch(action)
    // }
    history.push({ pathname: REVIEW_BOOKING })
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
              booking={bookingData?.booking}
              config={DATEPICKER_CONFIG}
              withBookingDesc={true}
              submitBtn
              action=""
            />
          </div>
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
