import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { UserContext } from '../components/UserContext'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Spinner from '../components/Spinner'
import Modal from '../components/Modal/Modal'
import Form from '../components/Form'
import { pageTransitions, DATEPICKER_CONFIG } from '../constants/config'
import { LOGIN } from '../constants/routes'
import { auth, logout } from '../utils/login'
import db from '../firebase'
import { getData } from '../utils/database'
import { navigateTo } from '../utils/navigate'
import { formatBookings } from '../utils/helpers'
import { notifyError, notifyInfo } from '../utils/notification'
import { DB_ERROR_MSG } from '../constants/toastMessages'
import { ReactComponent as CloseIcon } from '../assets/icons/close.svg'

const Admin = ({ history }) => {
  const [bookingDetail, setBookingDetail] = useState({ id: '', data: {} })
  const [bookings, setBookings] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [loading, handleLoading] = useState(true)

  const { user } = useContext(UserContext)

  const handleSignOut = () => {
    try {
      logout()
      navigateTo(history, LOGIN)
    } catch (error) {
      console.log(error)
      notifyError(DB_ERROR_MSG)
    }
  }

  const hideModal = (e) => {
    console.log('hide modal event', e)
  }

  const toggleOptions = (booking) => {
    setBookingDetail(booking)
    setShowModal(!showModal)
  }

  const onHandleChange = (e) => {
    if (e.target.name === 'people') {
      setBookingDetail({
        ...bookingDetail,
        [e.target.name]: parseInt(e.target.value)
      })
      return
    }
    setBookingDetail({ ...bookingDetail, [e.target.name]: e.target.value })
  }

  const onHandleDate = (e) => {
    setBookingDetail({ ...bookingDetail, date: e })
  }

  const onHandleUpdate = (e) => {
    const submitBooking = { ...bookingDetail }
    e.preventDefault()
    console.log('data to be submitted', submitBooking)
    // db.collection('bookings')
    //   .update({
    //     email: submitBooking.email,
    //     name: submitBooking.name,
    //     date: submitBooking.date,
    //     guests: submitBooking.people,
    //     confirmed: true
    //   })
    //   .then(() => handleModal())
    //   .catch((err) => {
    //     console.log('Error occurred while saving to database: ', err)
    //     notify(DB_ERROR_MSG)
    //   })
  }

  const onHandleDelete = () => {
    console.log('actual booking', bookingDetail)
    db.collection('bookings')
      .doc(bookingDetail.id)
      .delete()
      .then(() => {
        setShowModal(false)
        notifyInfo(`Removed ${bookingDetail.data.name} booking successfully.`)
      })
      .catch((err) => console.log('error in handleDelete', err))
  }

  useEffect(() => {
    const listener = auth.onAuthStateChanged(async (authUser) => {
      if (user) {
        try {
          const params = {
            name: 'bookings',
            order: { name: 'date', type: 'asc' },
            limit: 20
          }
          db.collection(params.name)
            .orderBy(params.order.name, params.order.type)
            .limit(params.limit)
            .onSnapshot((querySnapshot) => {
              const booking = getData(querySnapshot)
              const allBookings = formatBookings(booking)
              setBookings(allBookings)
              handleLoading(false)
            })
        } catch (error) {
          console.log('Error on fetching collection', error)
          notifyError(DB_ERROR_MSG)
        }
      } else {
        history.push({ pathname: LOGIN })
      }
    })
    return () => listener()
  }, [history, user])

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <ToastContainer
        className="toast__container"
        toastClassName="toast"
        progressClassName="toast__progress"
      />
      <Modal show={showModal} onKeyUp={(e) => hideModal(e)}>
        <div className="modal-book__nav">
          <button
            className="modal-book__close"
            onClick={() => setShowModal(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <h2 className="heading modal-book__heading">Booking action</h2>
        <p className="text modal-book__text">
          Choose an action for <strong>{bookingDetail.name}</strong> booking.
        </p>
        <p className="text modal-book__text">
          Both edit or delete process cannot be undone.
        </p>
        <div className="admin__form-container">
          <Form
            booking={bookingDetail.data}
            config={DATEPICKER_CONFIG}
            handleChange={onHandleChange}
            handleDate={onHandleDate}
            handleSubmit={onHandleUpdate}
            submitBtn={false}
            cssClass="form--edit"
            withBookingDesc={false}
          />
        </div>
        <footer className="modal-book__footer">
          <button
            className="btn btn--tertiary"
            type="button"
            onClick={onHandleDelete}
          >
            Delete
          </button>
          <button className="btn btn--light" type="submit">
            Update
          </button>
        </footer>
      </Modal>
      <Navbar />
      <motion.main
        className="container admin__container"
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <header className="admin__header">
          <h1 className="admin__title">Bookings</h1>
          <button className="btn btn--light btn--small" onClick={handleSignOut}>
            Sign out
          </button>
        </header>
        {bookings.length === 0 ? (
          <p>No bookings yet</p>
        ) : (
          <motion.table className="table" variants={pageTransitions}>
            <thead className="table__header">
              <tr className="table__row">
                <th className="table__heading">Name</th>
                <th className="table__heading">Date</th>
                <th className="table__heading">Time</th>
                <th className="table__heading">Email</th>
                <th className="table__heading">Guests</th>
                <th className="table__heading">Options</th>
              </tr>
            </thead>
            <tbody>
              {bookings
                ? bookings.map((item) => {
                  return (
                    <Booking
                      key={item.id}
                      name={item.data.name}
                      email={item.data.email}
                      guests={item.data.guests}
                      date={item.data.date}
                      toggleOptions={() => toggleOptions(item)}
                    />
                  )
                })
                : null}
            </tbody>
          </motion.table>
        )}
      </motion.main>
    </>
  )
}

Admin.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func })
}

Admin.defaultProps = {
  history: {}
}

export default withRouter(Admin)
