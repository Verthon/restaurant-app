import React from "react";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

import { TRANSITIONS } from "constants/config";
import { useCompanyData } from "hooks/useCompanyData/useCompanyData";
import { Container } from "ui/Container/Container";
import { Navbar } from "ui/Navbar/Navbar";
import { BookingForm } from "components/BookingForm/BookingForm";

export default function BookTable() {
  const { companyData } = useCompanyData();
  const { hours, location, contact } = companyData;
  const links = [
    { name: "Menu", link: "menu" },
    { name: "Book Table", link: "book-table" },
  ];

  return (
    <>
      <ToastContainer />
      <Navbar />
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
              <BookingForm />
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
