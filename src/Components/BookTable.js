import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify'
import contactInfo from '../contactInfo'
import { sendBookingInfo } from '../actions/index'
import Navbar from './Navbar'
import Form from './Form'
import bookTableImg from '../images/brooke-lark-book-table.jpg'
import { REVIEW_BOOKING } from '../constants/routes'
import {
  getTomorrowsDate,
  transformLocalStorageData,
  loadLocalStorageState,
  saveLocalStorageState,
  isDateCurrent
} from '../helpers'

class BookTable extends React.PureComponent {
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
      config: {
        startDate: getTomorrowsDate(),
        minTime: 12,
        maxTime: 22
      },
      booking: {
        date: getTomorrowsDate(),
        people: 1,
        name: '',
        email: '',
        confirmed: false
      }
    }
  }

  componentDidMount () {
    const data = loadLocalStorageState('booking')
    if (data && isDateCurrent(data.booking.date)) {
      this.handleLocalStorageRead(data)
    }
  }

  handleLocalStorageRead = data => {
    this.setState({ booking: transformLocalStorageData(data.booking) })
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

  onHandleSubmit = e => {
    const { booking } = this.state
    e.preventDefault()
    saveLocalStorageState({ booking: booking })
    this.props.sendData(booking)
    this.props.history.push({ pathname: REVIEW_BOOKING })
  }

  notify = () =>
    toast('Offline mode detected. Application is working on cached version')

  render () {
    const { booking, config } = this.state
    const { location, hours } = contactInfo.info

    return (
      <>
        <ToastContainer />
        <div className='table-booking fade-in'>
          <Navbar />
          <div className='row container'>
            <div className='section section__col'>
              <h2 className='table-booking__subtitle'>Make a reservation</h2>
              <Form
                handleSubmit={this.onHandleSubmit}
                handleChange={this.onHandleChange}
                handleDate={this.onHandleDate}
                booking={booking}
                config={config}
                submitBtn
              />
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
