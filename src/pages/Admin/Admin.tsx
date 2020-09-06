import React from 'react'
import { motion } from 'framer-motion'
import { ToastContainer } from 'react-toastify'

import { Navbar } from '../../ui/Navbar/Navbar'
import { BookingsTable } from '../../ui/BookingsTable/BookingsTable'
import { Spinner } from '../../ui/Spinner/Spinner'
import { Modal } from '../../ui/Modal/Modal'
import Form from '../../components/Form'
import { DATEPICKER_CONFIG } from '../../constants/config'
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import { Button } from '../../ui/Button/Button'
import { Props } from './Admin.types'

export const Admin = ({isLoading, handleSignOut, bookingDetail, bookings, bookingHandlers, toggleOptions, bookingModal }: Props) => {
  const adminLinks = [{ name: 'Bookings', link: 'bookings' }, { name: 'Storage', link: 'storage' }]
  const {handleBookingChange, handleDateChange, handleBookingUpdate, handleBookingDelete} = bookingHandlers
  if (isLoading) {
    return (
      <>
        <Navbar admin hashlink links={adminLinks}>
          <Button className="btn--light" size="btn--small" onClick={handleSignOut}>
            Sign out
          </Button>
        </Navbar>
        <motion.main className="container admin__container" initial="exit" animate="enter" exit="exit">
          <h2 className="admin__title" id="bookings">
            Bookings
          </h2>
          <Spinner/>
        </motion.main>
      </>
    )
  }

  return (
    <>
      <ToastContainer className="toast__container" toastClassName="toast" progressClassName="toast__progress" />
      {bookingModal.showModal && bookingModal.toggleModal}
      <Modal show={bookingModal.showModal ? bookingModal.showModal : false}>
        <div className="modal-book__nav">
          <button className="modal-book__close" onClick={() => bookingModal.toggleModal()}>
            <CloseIcon />
          </button>
        </div>
        <h2 className="heading modal-book__heading">Booking action</h2>
        <p className="text modal-book__text">
          Choose an action for <strong>{bookingDetail.name}</strong> booking.
        </p>
        <p className="text modal-book__text">Both edit or delete process cannot be undone.</p>
        <div className="admin__form-container">
          <Form
            booking={bookingDetail.data}
            config={DATEPICKER_CONFIG}
            handleChange={handleBookingChange}
            handleDate={handleDateChange}
            handleSubmit={handleBookingUpdate}
            submitBtn={false}
            cssClass="form--edit"
            action=""
            withBookingDesc={false}
          />
        </div>
        <footer className="modal-book__footer">
          <Button className="btn--transparent" type="button" onClick={handleBookingDelete}>
            Delete
          </Button>
          <Button className="btn--light" type="submit" onClick={handleBookingUpdate}>
            Update
          </Button>
        </footer>
      </Modal>
      <Navbar admin hashlink links={adminLinks}>
        <Button className="btn--light" size="btn--small" onClick={handleSignOut}>
          Sign out
        </Button>
      </Navbar>
      <motion.main className="container admin__container" initial="exit" animate="enter" exit="exit">
        <h2 className="admin__title" id="bookings">
          Bookings
        </h2>
        {bookings.length === 0 ? (
          <p>No bookings yet</p>
        ) : (
          <BookingsTable bookings={bookings} toggleOptions={toggleOptions} />
        )}
        <h2 className="admin__title" id="storage">
          Storage
        </h2>
      </motion.main>
    </>
  )
}
