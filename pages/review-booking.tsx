import React, { useState } from "react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { gql } from '@apollo/client';
import dayjs from 'dayjs';
import emailjs from 'emailjs-com'

import { client } from "lib/apollo/apolloClient";
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
import { useCompanyData } from "hooks/useCompanyData/useCompanyData";
import { useBookingDataState, useBookingDataDispatch } from "hooks/useBooking/useBooking"
import { HOME, MENU } from "constants/routes";
import { BOOKING_DUPLICATED_EMAIL_MSG, EMAIL_SENDING_FAIL_MSG } from "constants/toastMessages";
import { notifyError } from "utils/notification";

export async function getStaticProps() {
  return {
    props: {
      client,
    },
  }
}

const ADD_BOOKING = gql`
  mutation ($email: String!, $name: String!, $date: timestamptz!, $guests: smallint!) {
    insert_bookings(objects: {email: $email, name: $name, date: $date, guests: $guests}) {
      affected_rows
      returning {
        id
      }
    }
  }
`

const UPDATE_BOOKING = gql`
  mutation ($id: Int!) {
    update_bookings(_set: {confirmed: true}, where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`

export default function ReviewBooking({ client }) {
  const { companyData } = useCompanyData();
  const booking = useBookingDataState();
  const dispatch = useBookingDataDispatch();
  const { location, contact } = companyData;
  const [editable, setEditable] = useState(false)
  const [show, toggleModal] = useState(false)
  const [loading, setLoading] = useState(false);

  const handleBookingEdit = () => {
    setEditable(true)
  }

  const addBooking = async ({ variables }) => {
    return client.mutate({ mutation: ADD_BOOKING, variables })
  }

  const updateBooking = async ({variables}) => {
    return client.mutate({ mutation: UPDATE_BOOKING, variables  })
  }

  const handleEmailSend = async (id: number) => {
    const templateParams = {
      name: booking.name,
      email: booking.email,
      guests: booking.guests,
      date: dayjs(booking.date as Date).format('DD-MMMM-YYYY HH:mm')
    }
    try {
      await emailjs.send('gmail-alkinoos', 'reservation', templateParams, process.env.EMAIL_API_KEY)
      await updateBooking({ variables: {id: id} })
      setLoading(false)
      toggleModal(true)
    } catch (error) {
      setLoading(false)
      notifyError(EMAIL_SENDING_FAIL_MSG)
    }
  }

  const handleBookingSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>
  ) => {
    try {
      e.preventDefault()

      if (booking) {
        setLoading(true)
        const submitBooking = { ...booking }
        const result = await addBooking({ variables: {email: submitBooking.email, name: submitBooking.name, date: submitBooking.date, guests: submitBooking.guests} })
        const id = result.data.insert_bookings.returning[0].id;
        await handleEmailSend(id);
      }
    } catch(error) {
      setLoading(false)
      notifyError(BOOKING_DUPLICATED_EMAIL_MSG)
    }
  }

  const { address, code, city, province } = location;
  const { name, guests, date, email } = booking || {};

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
              booking={booking}
              config={DATEPICKER_CONFIG}
              dispatch={dispatch}
              handleSubmit={handleBookingSubmit}
              submitBtn={false}
              cssClass="form--edit"
              action={getEmailActionUrl(email)}
              withBookingDesc={true}
            />
          </div>
          <footer className="review-booking__footer review-booking__footer--edit">
            <form onSubmit={handleBookingSubmit}>
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
                {splitDate(formatDate(convertToDate(date as Date)))}
              </p>
              <p className="review-booking__description">Date</p>
            </div>
            <div className="section__col section__col--flexible">
              <p className="review-booking__value">
                {splitTime(formatDate(convertToDate(date as Date)))}
              </p>
              <p className="review-booking__description">Time</p>
            </div>
          </div>
          <p className="review-booking__address">{address}</p>
          <p className="review-booking__address">
            {city}, {province}, {code}{" "}
          </p>
          <footer className="review-booking__footer">
            <form onSubmit={handleBookingSubmit}>
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
                loading={false}
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
