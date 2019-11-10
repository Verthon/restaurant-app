import React from 'react'
import dayjs from 'dayjs'
import Navbar from './Navbar'
import Spinner from './Spinner'
import { LOGIN } from '../constants/routes'
import db, { firebase } from '../firebase'
import PropTypes from 'prop-types'

class Admin extends React.Component {
  static propTypes = {
    history: PropTypes.shape({ push: PropTypes.func })
  }

  static defaultProps = {
    history: {}
  }

  constructor () {
    super()
    this.state = {
      bookings: false
    }
  }

  handleSignOut = () => {
    firebase.auth().signOut()
    setTimeout(() => {
      this.props.history.push({ pathname: LOGIN })
    }, 1000)
  }

  componentDidMount () {
    this.listener = firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        db.collection('bookings')
          .get()
          .then(snapshot => {
            const data = []
            snapshot.docs.forEach(doc => {
              data.push(doc.data())
            })
            const bookings = data.map(booking => {
              booking.date = booking.date.toDate()
              return booking
            })
            this.setState({ bookings })
            console.log(dayjs(this.state.bookings[0].date).format('DD/MM/YYYY'))
          })
      } else {
        this.props.history.push({ pathname: LOGIN })
      }
    })
  }

  componentWillUnmount () {
    this.listener()
  }

  render () {
    let list = null
    if (this.state.bookings) {
      list = this.state.bookings.map(item => item)
    }
    return (
      <>
        <Navbar />
        <main className='container'>
          <h1 className='title'>Bookings</h1>
          <ul>
            {list ? this.state.bookings.map(item => {
              return (
                <li key={item.email}> Name: {item.name} | email: {item.email} | guests: {item.guests} | date: {dayjs(item.date).format('DD/MM/YYYY')} </li>
              )
            })
              : <Spinner />}
          </ul>
          <button className='btn' onClick={this.handleSignOut}>
            Sign out
          </button>
        </main>
      </>
    )
  }
}

export default Admin
