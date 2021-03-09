import React, { useState } from "react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { gql } from "@apollo/client";
import dayjs from "dayjs";
import emailjs from "emailjs-com";

import { client } from "lib/apollo/apolloClient";
import {
  splitDate,
  splitTime,
  formatDate,
  convertToDate,
  getEmailActionUrl,
} from "utils/helpers";
import { TRANSITIONS } from "constants/config";
import Form from "components/Form";
import { Button } from "ui/Button/Button";
import { Modal } from "ui/Modal/Modal";
import { useCompanyData } from "hooks/useCompanyData/useCompanyData";
import { useBookingState } from "hooks/useBooking/useBooking";
import { ROUTES } from "constants/routes";
import { ERROR_MSG } from "constants/messages";
import { showErrorNotification } from "utils/notification";

export type BookingVariables = {
  id?: number;
  email?: string;
  name?: string;
  date?: Date;
  guests?: number;
};

const ADD_BOOKING = gql`
  mutation(
    $email: String!
    $name: String!
    $date: timestamptz!
    $guests: smallint!
  ) {
    insert_bookings(
      objects: { email: $email, name: $name, date: $date, guests: $guests }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

const UPDATE_BOOKING = gql`
  mutation($id: Int!) {
    update_bookings(_set: { confirmed: true }, where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export default function ReviewBooking() {
  const { companyData } = useCompanyData();
  const booking = useBookingState();
  const { location, contact } = companyData;
  const [editable, setEditable] = useState(false);
  const [show, toggleModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleBookingEdit = () => {
    setEditable(true);
  };

  const addBooking = async ({ variables }: { variables: BookingVariables }) => {
    return client.mutate({ mutation: ADD_BOOKING, variables });
  };

  const updateBooking = async ({
    variables,
  }: {
    variables: BookingVariables;
  }) => {
    return client.mutate({ mutation: UPDATE_BOOKING, variables });
  };

  const handleEmailSend = async (id: number) => {
    const templateParams = {
      name: booking.name,
      email: booking.email,
      guests: booking.guests,
      date: dayjs(booking.date as Date).format("DD-MMMM-YYYY HH:mm"),
    };
    try {
      await emailjs.send(
        "gmail-alkinoos",
        "reservation",
        templateParams,
        process.env.EMAIL_API_KEY
      );
      await updateBooking({ variables: { id } });
      setLoading(false);
      toggleModal(true);
    } catch (error) {
      setLoading(false);
      showErrorNotification(ERROR_MSG.emailSendFail);
    }
  };

  const handleBookingSubmit = async (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    try {
      e.preventDefault();

      if (booking) {
        setLoading(true);
        const submitBooking = { ...booking };
        const result = await addBooking({
          variables: {
            email: submitBooking.email,
            name: submitBooking.name,
            date: submitBooking.date,
            guests: submitBooking.guests,
          },
        });
        const id = result.data.insert_bookings.returning[0].id;
        await handleEmailSend(id);
      }
    } catch (error) {
      setLoading(false);
      showErrorNotification(ERROR_MSG.emailDuplicated);
    }
  };

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
            <Button variant="transparent" size="regular" link={ROUTES.home}>
              Back to Home
            </Button>
            <Button variant="light" size="regular" link={ROUTES.menu}>
              See Menu
            </Button>
          </footer>
        </Modal>
        <motion.article
          className="review-booking__content"
          variants={TRANSITIONS}
        >
          <h1 className="heading review-booking__company">
            <Link href={ROUTES.home}>
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
          <Button variant="transparent" size="regular" link={ROUTES.home}>
            Back to Home
          </Button>
          <Button variant="light" size="regular" link={ROUTES.menu}>
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
          variants={TRANSITIONS}
        >
          <h1 className="heading review-booking__company">
            <Link href={ROUTES.home}>
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
