import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { UserContext } from '../components/UserContext'
import { DataContext } from '../components/DataContext'
import Navbar from '../components/Navbar'
import Booking from '../components/Booking'
import Spinner from '../components/Spinner'
import { LOGIN } from '../constants/routes'
import { auth, logout } from '../utils/login'
import { getCollection, getData } from '../utils/database'
import { navigateTo } from '../utils/navigate'
import { formatBookings } from '../utils/helpers'

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
    }
  }

  useEffect(() => {
    const listener = auth.onAuthStateChanged(async (authUser) => {
      if (user) {
        try {
          getCollection('bookings').then((snapshot) => {
            const data = getData(snapshot)
            const allBookings = formatBookings(data)
            setBookings(allBookings)
            handleLoading(false)
          })
        } catch (error) {
          console.log('Error on fetching collection', error)
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
      <main className='container'>
        <h1 className='title'>Bookings</h1>
        <button className='btn' onClick={handleSignOut}>
          Sign out
        </button>
        <table className='table'>
          <thead>
            <tr className='table__row'>
              <th className='table__header'>Name</th>
              <th className='table__header'>Date</th>
              <th className='table__header'>Time</th>
              <th className='table__header'>Email</th>
              <th className='table__header'>Guests</th>
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
                  />
                )
              })
              : null}
          </tbody>
        </table>
      </main>
    </>
  )
}

Admin.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func })
}

Admin.defaultProps = {
  history: {}
}

export default Admin
