import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Modal = ({ show }) => {
  const activeClassName = show ? 'modal-book--active' : 'modal-book--disabled'
  return (
    <div className={`modal-book ${activeClassName}`}>
      <article className='modal-book__content fade-in'>
        <h2 className='heading'>Thank you</h2>
        <p className='text modal-book__text'>
          Thank you for booking reservation. Detailed information will be send
          to your email address.
        </p>
        <Link to='/'>
          <button className='btn btn--dark' type='button'>
            Continue
          </button>
        </Link>
      </article>
    </div>
  )
}

Modal.propTypes = { show: PropTypes.bool }

Modal.defaultProps = { show: false }

export default Modal
