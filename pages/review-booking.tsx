import React, { useState } from "react"
import Link from "next/link"
import { ToastContainer } from "react-toastify"
import { motion } from "framer-motion"

import { splitDate, splitTime, formatDate, convertToDate } from "utils/helpers"
import { PAGE_VARIANTS } from "constants/config"
import { ReviewBookingForm } from "components/ReviewBookingForm/ReviewBookingForm"
import { Button } from "ui/Button/Button"
import { Modal } from "ui/Modal/Modal"
import { useCompanyData } from "hooks/useCompanyData/useCompanyData"
import { useBookingState } from "hooks/useBooking/useBooking"
import { ROUTES } from "constants/routes"
import { PageTransition } from "ui/PageTransition/PageTransition"

export default function ReviewBooking() {
  const { companyData } = useCompanyData()
  const booking = useBookingState()
  const { location, contact } = companyData
  const [editable, setEditable] = useState(false)
  const [show, toggleModal] = useState(false)

  const handleBookingEdit = () => {
    setEditable(true)
  }

  const { address, code, city, province } = location
  const { name, guests, date } = booking

  if (editable) {
    return (
      <motion.div className="review-booking" initial="exit" animate="enter" exit="exit">
        <ToastContainer />
        <Modal show={show}>
          <h2 className="heading modal-book__heading">Thank you</h2>
          <p className="text modal-book__text">Thank you for booking reservation.</p>
          <p className="text modal-book__text">We will contact you shortly.</p>
          <footer className="modal-book__footer">
            <Button variant="transparent" size="regular" link={ROUTES.home}>
              Back to Home
            </Button>
            <Button variant="light" size="regular" link={ROUTES.menu}>
              See Menu
            </Button>
          </footer>
        </Modal>
        <motion.article className="review-booking__content" variants={PAGE_VARIANTS}>
          <h1 className="heading review-booking__company">
            <Link href={ROUTES.home}>
              <a>{contact.name}</a>
            </Link>
          </h1>
          <img className="review-booking__image" src="/assets/images/landing/brooke-lark-about.jpg" alt="" />
          <h2 className="review-booking__title">Edit booking</h2>
          <ReviewBookingForm handleEdit={handleBookingEdit} toggleModal={toggleModal} editable={editable} />
        </motion.article>
      </motion.div>
    )
  }

  return (
    <PageTransition>
      <Modal show={show}>
        <h2 className="heading modal-book__heading">Thank you</h2>
        <p className="text modal-book__text">Thank you for booking reservation.</p>
        <p className="text modal-book__text">We will contact you shortly.</p>
        <footer className="modal-book__footer">
          <Button variant="transparent" size="regular" link={ROUTES.home}>
            Back to Home
          </Button>
          <Button variant="light" size="regular" link={ROUTES.menu}>
            See Menu
          </Button>
        </footer>
      </Modal>
      <motion.div className="review-booking" initial="exit" animate="enter" exit="exit">
        <motion.article className="review-booking__content" variants={PAGE_VARIANTS}>
          <h1 className="heading review-booking__company">
            <Link href={ROUTES.home}>
              <a>{contact.name}</a>
            </Link>
          </h1>
          <img className="review-booking__image" src="/assets/images/landing/brooke-lark-about.jpg" alt="" />
          <p className="review-booking__client">
            <strong className="review-booking__name">{name}</strong> reservation
          </p>
          <div className="review-booking__container">
            <div className="section__col section__col--flexible">
              <p className="review-booking__value">{guests}</p>
              <p className="review-booking__description">Guests</p>
            </div>
            <div className="section__col section__col--flexible">
              <p className="review-booking__value">{splitDate(formatDate(convertToDate(date)))}</p>
              <p className="review-booking__description">Date</p>
            </div>
            <div className="section__col section__col--flexible">
              <p className="review-booking__value">{splitTime(formatDate(convertToDate(date)))}</p>
              <p className="review-booking__description">Time</p>
            </div>
          </div>
          <p className="review-booking__address">{address}</p>
          <p className="review-booking__address">
            {city}, {province}, {code}{" "}
          </p>
          <footer className="review-booking__footer">
            <ReviewBookingForm handleEdit={handleBookingEdit} toggleModal={toggleModal} />
          </footer>
        </motion.article>
      </motion.div>
    </PageTransition>
  )
}
