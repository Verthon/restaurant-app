import React, { useContext } from "react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

import {
  splitDate,
  splitTime,
  formatDate,
  convertToDate,
  getEmailActionUrl,
} from "utils/helpers";
import { DATEPICKER_CONFIG, pageTransitions } from "constants/config";
import { Modal } from "ui/Modal/Modal";
import Form from "components/Form";
import { Button } from "ui/Button/Button";
import { BookingDataContext } from "context/bookingData/BookingDataContext";
import { useCompanyData } from "hooks/useCompanyData/useCompanyData";
import { HOME, MENU } from "constants/routes";

export default function ReviewBooking({
  onSubmit,
  editable,
  show,
  handleBookingEdit,
  loading,
}) {
  const bookingData = useContext(BookingDataContext);
  const { companyData } = useCompanyData();
  const { location, contact } = companyData;

  const { address, code, city, province } = location;
  const { name, guests, date, email } = bookingData?.booking || {};

  if (editable && email) {
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
            <Button variant="transparent" size="regular" link={HOME}>
              Back to Home
            </Button>
            <Button variant="light" size="regular" link={MENU}>
              See Menu
            </Button>
          </footer>
        </Modal>
        <motion.article
          className="review-booking__content"
          variants={pageTransitions}
        >
          <h1 className="heading review-booking__company">
            <Link href={HOME}>
              <a>{contact.name}</a>
            </Link>
          </h1>
          <img
            className="review-booking__image"
            src="/assets/images/landing/brooke-lark-about.jpg"
            alt=""
          />
          <h2 className="review-booking__title">Edit booking</h2>
          <div className="review-booking__form">
            <Form
              booking={bookingData?.booking}
              config={DATEPICKER_CONFIG}
              handleChange={bookingData?.handleBookingChange}
              handleDate={bookingData?.handleDateChange!}
              handleSubmit={onSubmit}
              submitBtn={false}
              cssClass="form--edit"
              action={getEmailActionUrl(email)}
              withBookingDesc={true}
            />
          </div>
          <footer className="review-booking__footer review-booking__footer--edit">
            <form onSubmit={onSubmit}>
              <Button
                variant="light"
                size="regular"
                type="submit"
                loading={loading}
              >
                Confirm Booking
              </Button>
            </form>
          </footer>
        </motion.article>
      </motion.div>
    );
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
          <Button variant="transparent" size="regular" link={HOME}>
            Back to Home
          </Button>
          <Button variant="light" size="regular" link={MENU}>
            See Menu
          </Button>
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
            <Link href={HOME}>
              <a>{contact.name}</a>
            </Link>
          </h1>
          <img
            className="review-booking__image"
            src="/assets/images/landing/brooke-lark-about.jpg"
            alt=""
          />
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
                {splitDate(formatDate(convertToDate(date!)))}
              </p>
              <p className="review-booking__description">Date</p>
            </div>
            <div className="section__col section__col--flexible">
              <p className="review-booking__value">
                {splitTime(formatDate(convertToDate(date!)))}
              </p>
              <p className="review-booking__description">Time</p>
            </div>
          </div>
          <p className="review-booking__address">{address}</p>
          <p className="review-booking__address">
            {city}, {province}, {code}{" "}
          </p>
          <footer className="review-booking__footer">
            <form onSubmit={onSubmit}>
              <Button
                variant="transparent"
                size="regular"
                type="button"
                onClick={handleBookingEdit}
              >
                Edit booking
              </Button>
              <Button
                variant="light"
                size="regular"
                type="submit"
                loading={loading}
              >
                Confirm Booking
              </Button>
            </form>
          </footer>
        </motion.article>
      </motion.div>
    </>
  );
}
