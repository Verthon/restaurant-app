import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ hours, location, contact }) => {
  const { weekdays, weekend } = hours
  const { address, code, city, province, country } = location
  return (
    <footer id='Contact' className='site-footer section'>
      <div className='row container'>
        <div className='site-footer__column'>
          <h2 className='site-footer__title'>Opening Hours</h2>
          <p className='site-footer__description'>{weekdays.days}</p>
          <p className='site-footer__description'>{weekdays.time}</p>
          <p className='site-footer__description'>{weekend.days}</p>
          <p className='site-footer__description'>{weekend.time}</p>
        </div>
        <div className='site-footer__column'>
          <h2 className='site-footer__title'>Our Location</h2>
          <p className='site-footer__description'>{address}</p>
          <p className='site-footer__location'>
            {code} {city}
          </p>
          <p className='site-footer__location'>
            {province}, {country}
          </p>
        </div>
        <div className='site-footer__column'>
          <h2 className='site-footer__title'>Contact</h2>
          <p className='site-footer__description'>Email: {contact.email}</p>
          <p className='site-footer__description'>Phone: {contact.phone}</p>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  location: PropTypes.shape({
    address: PropTypes.string,
    code: PropTypes.string,
    city: PropTypes.string,
    province: PropTypes.string,
    country: PropTypes.string
  }),
  hours: PropTypes.shape({
    weekdays: PropTypes.shape({
      days: PropTypes.string,
      time: PropTypes.string
    }),
    weekend: PropTypes.shape({
      days: PropTypes.string,
      time: PropTypes.string
    })
  }),
  contact: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string
  })
}

Footer.defaultProps = {
  location: PropTypes.shape({
    address: 'Main Street 18',
    code: '321',
    city: 'London',
    province: 'Ontario',
    country: 'Canada'
  }),
  hours: PropTypes.shape({
    weekdays: PropTypes.shape({
      days: 'Monday - Friday',
      time: '12:00am - 10:00pm'
    }),
    weekend: PropTypes.shape({
      days: 'Saturday - Sunday',
      time: '12:00am - 10:00pm'
    })
  }),
  contact: PropTypes.shape({
    phone: '+1 555-555-555',
    email: 'alkinoos-taverna@gmail.com'
  })
}

export default Footer
