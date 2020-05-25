import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Modal = ({ show }) => {
  const activeClassName = show ? 'modal-book--active' : 'modal-book--disabled'
  return (
    <div className={`modal-book ${activeClassName}`}>
      <article className="modal-book__content fade-in">
        <h2 className="heading modal-book__heading">Thank you</h2>
        <p className="text modal-book__text">
          Thank you for booking reservation.
        </p>
        <p className="text modal-book__text">
          We will contact you shortly.
        </p>
        <footer className="modal-book__footer">
          <Link to="/menu">
            <button className="btn btn--light" type="button">
              See Menu
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn--dark" type="button">
              Back to Home
            </button>
          </Link>
        </footer>
      </article>
    </div>
  )
}

Modal.propTypes = { show: PropTypes.bool }

Modal.defaultProps = { show: false }

export default Modal
