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
      min: new Date(),
      max: new Date(),
      booking: {
        date: new Date(),
        people: 1,
        name: 'John Doe',
        email: ''
      },
      links: ['menu', 'book-table']
    }
  }

  handleDate = (e) => {
    const booking = { ...this.state.booking }
    booking.date = e
    this.setState({ booking })
  }

  handleGuests = (e) => {
    const booking = { ...this.state.booking }
    booking.people = e.target.value
    this.setState({ booking })
  }

  handleName = (e) => {
    const booking = { ...this.state.booking }
    booking.name = e.target.value
    this.setState({ booking })
  }

  handleEmail = (e) => {
    const booking = { ...this.state.booking }
    booking.email = e.target.value
    this.setState({ booking })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.history.push({ pathname: '/review-booking' })
  }

  render () {
    const { booking, min, max } = this.state
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
                    required
                    name='name'
                    onChange={this.handleName}
                    placeholder='Name'
                  />
                  <ErrorMessage><div className='error'>{}</div></ErrorMessage>
                  <label htmlFor='email' className='label'>
                    Email
                  </label>
                  <Field
                    className='table-booking__input'
                    type='email'
                    name='email'
                    required
                    onChange={this.handleEmail}
                    placeholder='email'
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
                    minDate={new Date()}
                    timeFormat='HH'
                    timeIntervals={60}
                    minTime={min.setHours(11)}
                    maxTime={max.setHours(22)}
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
                    required
                    placeholder='Number of guests'
                    min='1'
                    max='8'
                    onChange={this.handleGuests}
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
