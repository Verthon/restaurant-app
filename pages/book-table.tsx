import React from "react";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { useRouter } from 'next/router'

import Form from "components/Form";
import { TRANSITIONS } from "constants/config";
import { useCompanyData } from "hooks/useCompanyData/useCompanyData";
import { useBookingState } from "hooks/useBooking/useBooking"
import { Container } from "ui/Container/Container";
import { Navbar } from "ui/Navbar/Navbar";
import { ROUTES } from "constants/routes";

export default function BookTable() {
  const router = useRouter()
  const { companyData } = useCompanyData();
  const booking = useBookingState();
  const { hours, location, contact } = companyData;
  const links = [
    { name: "Menu", link: "menu" },
    { name: "Book Table", link: "book-table" },
  ];

  const handleBookingSubmit = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    router.push(ROUTES.review);
  };

  return (
    <>
      <ToastContainer />
      <Navbar links={links} hashlink={false} />
      <motion.div
        initial="exit"
        animate="enter"
        exit="exit"
        className="table-booking"
      >
        <Container>
          <motion.div
            variants={TRANSITIONS}
            className="table-booking__wrapper"
          >
            <div className="section section__col section__col--flexible">
              <h2 className="table-booking__subtitle">Make a reservation</h2>
              <Form
                handleSubmit={handleBookingSubmit}
                booking={booking}
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
                <img
                  src="/assets/images/brooke-lark-book-table.jpg"
                  alt=""
                  className="table-booking__image"
                  loading="lazy"
                />
              </picture>
            </div>
          </motion.div>
        </Container>
        <footer className="table-booking__footer" />
      </motion.div>
    </>
  );
}
