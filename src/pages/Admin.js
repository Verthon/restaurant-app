import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { UserContext } from '../components/UserContext'
import { DataContext } from '../components/DataContext'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Spinner from '../components/Spinner'
import { pageTransitions } from '../constants/config'
import { LOGIN } from '../constants/routes'
import { auth, logout } from '../utils/login'
import { getData, getCollectionWithOptions } from '../utils/database'
import { navigateTo } from '../utils/navigate'
import { formatBookings } from '../utils/helpers'
import { notify } from '../utils/notification'
import { DB_ERROR_MSG } from '../constants/toastMessages'

const Admin = ({ history }) => {
  const [bookings, setBookings] = useState([])
  const [loading, handleLoading] = useState(true)

  const { user } = useContext(UserContext)
  const checkContext = useContext(DataContext)
  console.log('checkContext Admin', checkContext)

  const handleSignOut = () => {
    try {
      logout()
      navigateTo(history, LOGIN)
    } catch (error) {
      console.log(error)
      notify(DB_ERROR_MSG)
    }
  }

  const toggleOptions = () => {
    console.log('KEK')
  }

  useEffect(() => {
    const listener = auth.onAuthStateChanged(async (authUser) => {
      if (user) {
        try {
          getCollectionWithOptions('bookings', { name: 'name', type: 'asc' }, 20).then((snapshot) => {
            console.log('snapshot', snapshot)
            const data = getData(snapshot)
            const allBookings = formatBookings(data)
            setBookings(allBookings)
            handleLoading(false)
          })
        } catch (error) {
          console.log('Error on fetching collection', error)
          notify(DB_ERROR_MSG)
        }
      } else {
        history.push({ pathname: LOGIN })
      }
    })
    return () => listener()
  }, [])

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <Navbar />
      <motion.main
        className="container"
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
                    key={item.email}
                    name={item.name}
                    email={item.email}
                    guests={item.guests}
                    date={item.date}
                    toggleOptions={toggleOptions}
                  />
                )
              })
              : null}
          </tbody>
        </motion.table>
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
