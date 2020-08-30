import React, { useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import { Navbar } from '../../ui/Navbar/Navbar'
import Form from '../../components/Form'
import bookTableImg from '../../assets/images/brooke-lark-book-table.jpg'
import { DATEPICKER_CONFIG, pageTransitions } from '../../constants/config'

import { CompanyDataContext } from '../../context/companyData/CompanyDataContext'
import { Props } from './BookTable.types'

export const BookTable = ({bookingData, onSubmit}: Props) => {
  const company = useContext(CompanyDataContext)
  const { hours, location, contact } = company.companyData
  const links = [
    { name: 'Menu', link: 'menu' },
    { name: 'Book Table', link: 'book-table' }
  ]

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
              handleSubmit={onSubmit}
              handleChange={bookingData.handleBookingChange}
              handleDate={bookingData.handleDateChange!}
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
