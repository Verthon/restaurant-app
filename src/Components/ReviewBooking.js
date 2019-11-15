/* eslint-disable react/no-unused-state */
// eslint-disable react/jsx-boolean-value
/* eslint-disable react/jsx-handler-names */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import contactInfo from '../contactInfo'
import {
  splitDate,
  splitTime,
  formatDate,
  convertToDate,
  getTomorrowsDate
} from '../helpers'
import Modal from './Modal'
import db from '../firebase'
import Form from './Form'
import about from '../images/brooke-lark-about.jpg'

class ReviewBooking extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      booking: {},
      error: false,
      editable: false,
      config: {
        startDate: getTomorrowsDate(),
        minTime: 12,
        maxTime: 22
      }
    }
  }

  componentDidMount () {
    const booking = { ...this.props.booking }
    booking.date = convertToDate(booking.date)
    this.setState({ booking: booking })
  }

  handleModal = () => {
    this.setState({ show: true })
    window.localStorage.removeItem('booking')
  }

  handleSendEmail = () => {
    this.handleModal()
  }

  handleEdit = () => {
    this.setState({ editable: true })
  }

  onHandleChange = e => {
    const booking = { ...this.state.booking }
    if (e.target.name === 'people') {
      booking[e.target.name] = parseInt(e.target.value)
      this.setState({ booking })
      return
    }
    booking[e.target.name] = e.target.value
    this.setState({ booking })
  }

  onHandleDate = e => {
    const booking = { ...this.state.booking }
    booking.date = e
    this.setState({ booking })
  }

  notify = () =>
    toast('Offline mode detected. Application is working on cached version')

  onHandleSubmit = e => {
    const { booking } = this.state
    e.preventDefault()
    db.collection('bookings')
      .add({
        email: booking.email,
        name: booking.name,
        date: booking.date,
        guests: booking.people,
        confirmed: true
      })
      .then(docRef => {
        const booking = { ...this.state.booking }
        booking.doc = docRef.id
        this.setState({ booking })
      })
      .catch(err => {
        console.log('Error occured while saving to database: ', err)
        this.notify()
      })

    this.handleModal()
  }

  render () {
    const { street, number, code, city, province } = contactInfo.info.location
    const { name, people, date } = this.props.booking
    const { show, editable, booking, config } = this.state

    if (editable) {
      return (
        <>
          <h1 className='heading review-booking__title'>
            <Link to='/'>{contactInfo.name}</Link>
          </h1>
          <Modal show={show} />
          <article className='review-booking fade-in'>
            <img src={about} alt='' />
            <h2 className='heading review-booking__title'>Edit booking</h2>
            <div className='review-booking__container'>
              <Form
                booking={booking}
                config={config}
                handleChange={this.onHandleChange}
                handleDate={this.onHandleDate}
                handleSubmit={this.onHandleSubmit}
                submitBtn={false}
                cssClass='form--edit'
              />
            </div>
            <footer className='review-booking__footer review-booking__footer--edit'>
              <button
                className='btn btn--dark'
                onClick={this.handleBooking}
                type='button'
              >
                Confirm Booking
              </button>
            </footer>
          </article>
        </>
      )
    }

    return (
      <>
        <Modal show={show} />
        <h1 className='heading review-booking__title'>
          <Link to='/'>{contactInfo.name}</Link>
        </h1>
        <article className='review-booking fade-in'>
          <img src={about} alt='' />
          <p className='review-booking__client'>
            <strong className='review-booking__name'>{name}</strong> reservation
          </p>
          <div className='row review-booking__container'>
            <div className='section__col section__col--flexible'>
              <p className='review-booking__value'>{people}</p>
              <p className='review-booking__description'>Guests</p>
            </div>
            <div className='section__col section__col--flexible'>
              <p className='review-booking__value'>
                {splitDate(formatDate(convertToDate(date)))}
              </p>
              <p className='review-booking__description'>Date</p>
            </div>
            <div className='section__col section__col--flexible'>
              <p className='review-booking__value'>
                {splitTime(formatDate(convertToDate(date)))}
              </p>
              <p className='review-booking__description'>Time</p>
            </div>
          </div>
          <p className='review-booking__address'>
            {street} {number}
          </p>
          <p className='review-booking__address'>
            {city}, {province}, {code}{' '}
          </p>
          <footer className='review-booking__footer'>
            <button className='btn btn--light' onClick={this.handleEdit}>
              Edit booking
            </button>
            <button
              className='btn btn--dark'
              onClick={this.onHandleSubmit}
              type='button'
            >
              Confirm Booking
            </button>
          </footer>
        </article>
      </>
    )
  }
}

const mapStateToProps = state => {
  return state
}

ReviewBooking.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string,
    search: propTypes.string
  }),
  booking: propTypes.shape({
    name: propTypes.string,
    people: propTypes.number,
    date: propTypes.instanceOf(Date),
    confirmed: propTypes.bool
  })
}

ReviewBooking.defaultProps = {
  location: propTypes.shape({
    pathname: propTypes.string,
    search: propTypes.string
  }),
  name: 'John Doe',
  people: 1,
  date: new Date(),
  email: 'john.doe@gmail.uu',
  confirmed: false
}

export default connect(mapStateToProps)(ReviewBooking)
