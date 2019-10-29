import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import contactInfo from '../contactInfo'
import { sendBookingInfo } from '../actions/index'
import Navbar from './Navbar'
import NavItem from './NavItem'
import bookTableImg from '../images/brooke-lark-book-table.jpg'
import { tomorrow, convertToDate, saveLocalStorageState } from '../helpers'
import db from '../base'

class BookTable extends React.Component {
  static propTypes = {
    sendData: PropTypes.func,
    history: PropTypes.shape({ push: PropTypes.func })
  }

  static defaultProps = {
    sendData: sendBookingInfo,
    history: {}
  }

  constructor () {
    super()
    this.state = {
      startDate: tomorrow(),
      minTime: 12,
      maxTime: 22,
      booking: {
        date: tomorrow(),
        people: 1,
        name: '',
        email: ''
      },
      links: ['menu', 'book-table']
    }
  }

  componentDidMount () {
    console.log(tomorrow())
    const data = JSON.parse(window.localStorage.getItem('booking'))
    if (data) {
      // Finish pure function transformLocalStorageData
      data.booking.date = convertToDate(data.booking.date)
      data.booking.people = parseInt(data.booking.people)
      this.setState({ booking: data.booking })
    }
  }

  handleChange = e => {
    const booking = { ...this.state.booking }
    if (e.target.name === 'people') {
      booking[e.target.name] = parseInt(e.target.value)
      this.setState({ booking })
      return
    }
    booking[e.target.name] = e.target.value
    this.setState({ booking })
  }

  handleDate = e => {
    const booking = { ...this.state.booking }
    booking.date = e
    this.setState({ booking })
  }

  handleSubmit = e => {
    const { booking } = this.state
    e.preventDefault()
    saveLocalStorageState({ booking: booking })
    db.collection('bookings')
      .add({
        email: booking.email,
        name: booking.name,
        date: booking.date,
        guests: booking.people
      })
      .then(docRef => {
        console.log('Document created with: ', docRef)
      })
      .then(this.props.history.push({ pathname: '/review-booking' }))
      .catch(err => {
        console.log('Error occured while trying to saving to database: ', err)
      })
  }

  render () {
    const { booking, startDate, minTime, maxTime } = this.state
    const { location, hours } = contactInfo.info

    return (
      <>
        <div className='table-booking fade-in'>
          <Navbar>
            {this.state.links.map((link, index) => (
              <NavItem key={index} name={link} hashlink={false} />
            ))}
          </Navbar>
          <div className='row container'>
            <div className='section section__col'>
              <h2 className='table-booking__subtitle'>Make a reservation</h2>
              <Formik>
                <Form onSubmit={this.handleSubmit} className='form-group'>
                  <label className='label' htmlFor='name'>
                    Name
                  </label>
                  <Field
                    className='table-booking__input'
                    type='text'
                    name='name'
                    placeholder='Name'
                    required
                    value={booking.name}
                    onChange={this.handleChange}
                  />
                  <ErrorMessage>
                    <div className='error'>{}</div>
                  </ErrorMessage>
                  <label htmlFor='email' className='label'>
                    Email
                  </label>
                  <Field
                    className='table-booking__input'
                    type='email'
                    name='email'
                    placeholder='Email address'
                    required
                    onChange={this.handleChange}
                    value={booking.email}
                  />
                  <label htmlFor='Datepicker' className='label'>
                    Please add date
                  </label>
                  <DatePicker
                    name='Datepicker'
                    className='table-booking__input'
                    selected={booking.date}
                    onChange={this.handleDate}
                    showTimeSelect
                    minDate={startDate}
                    timeFormat='HH'
                    timeIntervals={60}
                    minTime={startDate.setHours(minTime)}
                    maxTime={startDate.setHours(maxTime)}
                    dateFormat='MMMM dd, yyyy h aa'
                    timeCaption='Time'
                    placeholderText='Click and choose the date'
                  />
                  <label className='label' htmlFor='people'>
                    Number of guests
                  </label>
                  <Field
                    className='table-booking__input'
                    name='people'
                    type='number'
                    placeholder='Number of guests'
                    min='1'
                    max='4'
                    required
                    onChange={this.handleChange}
                    value={booking.people}
                  />
                  <p className='text table-booking__reminder'>
                    Table is kept for 15 minutes after reservation time. We
                    appreciate you being on time.
                  </p>
                  <button
                    className='btn btn--dark'
                    type='submit'
                    onClick={() => this.props.sendData(booking)}
                  >
                    Next step
                  </button>
                </Form>
              </Formik>
            </div>
            <article className='section section__col'>
              <h2 className='table-booking__subtitle'>Located in London</h2>
              <p>
                {location.street} {location.number}
              </p>
              <p>
                {location.city}, {location.province}, {location.code}
              </p>
              <p>{location.phone}</p>

              <h2 className='table-booking__subtitle'>Hours of operation</h2>
              <p>
                {hours.week.name} {hours.week.time}
              </p>
              <p>
                {hours.weekend.name} {hours.weekend.time}
              </p>
            </article>
            <div className='section section__col table-booking__image'>
              <picture>
                <img
                  src={bookTableImg}
                  alt=''
                  className='table-booking__image'
                />
              </picture>
            </div>
          </div>
          <footer className='table-booking__footer' />
        </div>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  sendData: payload => dispatch(sendBookingInfo(payload))
})

export default connect(
  null,
  mapDispatchToProps
)(BookTable)
