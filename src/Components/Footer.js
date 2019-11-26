import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ hours, location }) => {
  const { week, weekend } = hours
  const { street, number, code, city, province, country } = location
  return (
    <footer id='Contact' className='site-footer section'>
      <div className='row container'>
        <div className='site-footer__column'>
          <h2 className='site-footer__title'>Opening Hours</h2>
          <p className='site-footer__description'>{week.name}</p>
          <p className='site-footer__description'>{week.time}</p>
          <p className='site-footer__description'>{weekend.name}</p>
          <p className='site-footer__description'>{weekend.time}</p>
        </div>
        <div className='site-footer__column'>
          <h2 className='site-footer__title'>Our Location</h2>
          <p className='site-footer__description'>
            {number}th {street}
          </p>
          <p className='site-footer__location'>
            {code} {city}
          </p>
          <p className='site-footer__location'>
            {province}, {country}
          </p>
        </div>
        <div className='site-footer__column'>
          <h2 className='site-footer__title'>Contact</h2>
          <p className='site-footer__description'>Email: info@alkinoos.ca</p>
          <p className='site-footer__description'>Phone: +1 555-555-555</p>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  location: PropTypes.shape({
    street: PropTypes.string,
    number: PropTypes.number,
    code: PropTypes.string,
    city: PropTypes.string,
    province: PropTypes.string,
    country: PropTypes.string
  }),
  hours: PropTypes.shape({
    week: PropTypes.shape({
      name: PropTypes.string,
      time: PropTypes.string
    }),
    weekend: PropTypes.shape({
      name: PropTypes.string,
      time: PropTypes.string
    })
  })
}

Footer.defaultProps = {
  location: PropTypes.shape({
    street: 'Main Street',
    number: 18,
    code: 'N32-C6Z',
    city: 'London',
    province: 'Ontario',
    country: 'Canada'
  }),
  hours: PropTypes.shape({
    week: PropTypes.shape({
      name: 'Monday - Friday',
      time: '12:00am - 10:00pm'
    }),
    weekend: PropTypes.shape({
      name: 'Saturday - Sunday',
      time: '12:00am - 10:00pm'
    })
  })
}

export default Footer
