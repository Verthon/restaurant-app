/* eslint react/prop-types: 0 */
import React from 'react'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

const Booking = ({ name, email, confirmed, date, guests }) => {
  return (
    <tr className='table__row'>
      <td className='table__cell'>{name}</td>
      <td className='table__cell'>{dayjs(date).format('DD/MM/YYYY')}</td>
      <td className='table__cell'>{dayjs(date).set('minutes', 0).format('HH:mm')}</td>
      <td className='table__cell'>{email}</td>
      <td className='table__cell'>{guests}</td>
      <td className='table__cell'>{confirmed ? 'Yes' : 'No'}</td>
    </tr>
  )
}

Booking.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  guests: PropTypes.number,
  confirmed: PropTypes.bool
}

Booking.defaultProps = {
  name: 'John Doe',
  email: 'john.doe@gmail.uu',
  date: new Date(),
  confirmed: false
}

export default Booking
