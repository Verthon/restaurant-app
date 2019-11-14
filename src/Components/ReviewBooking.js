/* eslint-disable react/no-unused-state */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import contactInfo from '../contactInfo'
import { splitDate, splitTime, formatDate, convertToDate } from '../helpers'
import Modal from './Modal'
import db from '../firebase'
import about from '../images/brooke-lark-about.jpg'

class ReviewBooking extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      booking: {},
      error: false,
      editable: false
    }
  }

  componentDidMount () {
    console.log(this.props.booking)
  }

  handleModal = () => {
    this.setState({ show: true })
    window.localStorage.removeItem('booking')
  }

  handleSubmit = () => {
    console.log(';')
  }

  handleSendEmail = () => {
    this.handleModal()
  }

  handleEdit = () => {
    this.setState({ editable: true })
  }

  render () {
    const { street, number, code, city, province } = contactInfo.info.location
    const { name, people, date } = this.props.booking
    const { show } = this.state

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
            <button className='btn btn--dark' onClick={this.handleSendEmail} type='button'>
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
  // sendData: propTypes.func,
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
