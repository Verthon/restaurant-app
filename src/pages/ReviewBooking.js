/* eslint-disable react/no-unused-state */
// eslint-disable react/jsx-boolean-value
/* eslint-disable react/jsx-handler-names */

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import { connect, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import contactInfo from '../contactInfo'
import {
  splitDate,
  splitTime,
  formatDate,
  convertToDate,
  getTomorrowsDate,
  getEmailActionUrl
} from '../helpers'
import Modal from '../components/Modal'
import db from '../firebase'
import Form from '../components/Form'
import about from '../images/brooke-lark-about.jpg'

const ReviewBooking = () => {
  const bookingData = useSelector((state) => state.booking)
  const [show, toggleModal] = useState(false)
  const [booking, setBooking] = useState({})
  const [editable, setEditable] = useState(false)
  const [config, setConfig] = useState({
    startDate: getTomorrowsDate(),
    minTime: 12,
    maxTime: 22
  })

  useEffect(() => {
    const booking = { ...bookingData }
    // booking.date = convertToDate(bookingData.date)
    console.log('booking in useEffect', booking)
    setBooking({ booking })
  }, [bookingData])

  const handleModal = () => {
    toggleModal(true)
    window.localStorage.removeItem('booking')
  }

  const handleEdit = () => {
    setEditable(true)
  }

  const onHandleChange = (e) => {
    const booking = { ...this.state.booking }
    if (e.target.name === 'people') {
      booking[e.target.name] = parseInt(e.target.value)
      this.setState({ booking })
      return
    }
    booking[e.target.name] = e.target.value
    this.setState({ booking })
  }

  const onHandleDate = (e) => {
    setBooking({ ...booking, e })
  }

  const notify = () =>
    toast('Offline mode detected. Application is working on cached version')

  const onHandleSubmit = (e) => {
    const submitBooking = { ...booking }
    console.log('booking to submit', submitBooking)
    e.preventDefault()
    db.collection('bookings')
      .add({
        email: submitBooking.email,
        name: submitBooking.name,
        date: submitBooking.date,
        guests: submitBooking.people,
        confirmed: true
      })
      .then(() => handleModal())
      .catch((err) => {
        console.log('Error occured while saving to database: ', err)
        notify()
      })
  }

  const { street, number, code, city, province } = contactInfo.info.location
  const { name, people, date } = booking

  if (editable) {
    return (
      <>
        <ToastContainer />
        <h1 className='heading review-booking__title'>
          <Link to='/'>{contactInfo.name}</Link>
        </h1>
        <Modal show={show} />
        <article className='review-booking fade-in'>
          <img src={about} alt='' />
          <h2 className='heading review-booking__title'>Edit booking</h2>
          <div className='review-booking__container'>
            <Form
              booking={bookingData || booking}
              config={config}
              handleChange={onHandleChange}
              handleDate={onHandleDate}
              handleSubmit={onHandleSubmit}
              submitBtn={false}
              cssClass='form--edit'
              action={getEmailActionUrl(booking.email)}
            />
          </div>
          <footer className='review-booking__footer review-booking__footer--edit'>
            <form onSubmit={onHandleSubmit}>
              <button className='btn btn--dark' type='submit'>
                Confirm Booking
              </button>
            </form>
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
          <form onSubmit={onHandleSubmit}>
            <button
              className='btn btn--light'
              type='button'
              onClick={handleEdit}
            >
              Edit booking
            </button>
            <button className='btn btn--dark' type='submit'>
              Confirm Booking
            </button>
          </form>
        </footer>
      </article>
    </>
  )
}

// class ReviewBooking extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       show: false,
//       booking: {},
//       error: false,
//       editable: false,
//       config: {
//         startDate: getTomorrowsDate(),
//         minTime: 12,
//         maxTime: 22
//       }
//     }
//   }

//   componentDidMount () {
//     const booking = { ...this.props.booking }
//     booking.date = convertToDate(booking.date)
//     this.setState({ booking: booking })
//   }

//   handleModal = () => {
//     this.setState({ show: true })
//     window.localStorage.removeItem('booking')
//   }

//   handleSendingEmail = () => {
//     const booking = { ...this.state.booking }
//     booking.confirmed = true
//     console.log('Inside of handleSendingEmail()')
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(booking),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }

//     window
//       .fetch(`https://formspree.io/${booking.email}`, options)
//       .then(res => res.json())
//       .then(res => {
//         this.handleModal()
//       })
//       .catch(error => console.log(error))
//   }

//   handleEdit = () => {
//     this.setState({ editable: true })
//   }

//   onHandleChange = e => {
//     const booking = { ...this.state.booking }
//     if (e.target.name === 'people') {
//       booking[e.target.name] = parseInt(e.target.value)
//       this.setState({ booking })
//       return
//     }
//     booking[e.target.name] = e.target.value
//     this.setState({ booking })
//   }

//   onHandleDate = e => {
//     const booking = { ...this.state.booking }
//     booking.date = e
//     this.setState({ booking })
//   }

//   notify = () =>
//     toast('Offline mode detected. Application is working on cached version')

//   onHandleSubmit = e => {
//     const { booking } = this.state
//     e.preventDefault()
//     db.collection('bookings')
//       .add({
//         email: booking.email,
//         name: booking.name,
//         date: booking.date,
//         guests: booking.people,
//         confirmed: true
//       })
//       .then(() => this.handleSendingEmail())
//       .catch(err => {
//         console.log('Error occured while saving to database: ', err)
//         this.notify()
//       })
//   }

//   render () {
//     const { street, number, code, city, province } = contactInfo.info.location
//     const { name, people, date } = this.props.booking
//     const { show, editable, booking, config } = this.state

//     if (editable) {
//       return (
//         <>
//           <ToastContainer />
//           <h1 className='heading review-booking__title'>
//             <Link to='/'>{contactInfo.name}</Link>
//           </h1>
//           <Modal show={show} />
//           <article className='review-booking fade-in'>
//             <img src={about} alt='' />
//             <h2 className='heading review-booking__title'>Edit booking</h2>
//             <div className='review-booking__container'>
//               <Form
//                 booking={booking}
//                 config={config}
//                 handleChange={this.onHandleChange}
//                 handleDate={this.onHandleDate}
//                 handleSubmit={this.onHandleSubmit}
//                 submitBtn={false}
//                 cssClass='form--edit'
//                 action={getEmailActionUrl(booking.email)}
//               />
//             </div>
//             <footer className='review-booking__footer review-booking__footer--edit'>
//               <form
//                 action={getEmailActionUrl(booking.email)}
//                 method='POST'
//                 onSubmit={this.onHandleSubmit}
//               >
//                 <button className='btn btn--dark' type='submit'>
//                   Confirm Booking
//                 </button>
//               </form>
//             </footer>
//           </article>
//         </>
//       )
//     }

//     return (
//       <>
//         <Modal show={show} />
//         <h1 className='heading review-booking__title'>
//           <Link to='/'>{contactInfo.name}</Link>
//         </h1>
//         <article className='review-booking fade-in'>
//           <img src={about} alt='' />
//           <p className='review-booking__client'>
//             <strong className='review-booking__name'>{name}</strong> reservation
//           </p>
//           <div className='row review-booking__container'>
//             <div className='section__col section__col--flexible'>
//               <p className='review-booking__value'>{people}</p>
//               <p className='review-booking__description'>Guests</p>
//             </div>
//             <div className='section__col section__col--flexible'>
//               <p className='review-booking__value'>
//                 {splitDate(formatDate(convertToDate(date)))}
//               </p>
//               <p className='review-booking__description'>Date</p>
//             </div>
//             <div className='section__col section__col--flexible'>
//               <p className='review-booking__value'>
//                 {splitTime(formatDate(convertToDate(date)))}
//               </p>
//               <p className='review-booking__description'>Time</p>
//             </div>
//           </div>
//           <p className='review-booking__address'>
//             {street} {number}
//           </p>
//           <p className='review-booking__address'>
//             {city}, {province}, {code}{' '}
//           </p>
//           <footer className='review-booking__footer'>
//             <form
//               action='https://formspree.io/mjvvpvwe'
//               method='POST'
//               onSubmit={this.onHandleSubmit}
//             >
//               <button className='btn btn--light' onClick={this.handleEdit}>
//                 Edit booking
//               </button>
//               <button className='btn btn--dark' type='submit'>
//                 Confirm Booking
//               </button>
//             </form>
//           </footer>
//         </article>
//       </>
//     )
//   }
// }

const mapStateToProps = (state) => {
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
