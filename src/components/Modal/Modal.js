import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ show, children }) => {
  const activeClassName = show ? 'modal-book--active' : 'modal-book--disabled'
  return (
    <div className={`modal-book ${activeClassName}`}>
      <article className="modal-book__content fade-in">{children}</article>
    </div>
  )
}

Modal.propTypes = { show: PropTypes.bool, children: PropTypes.node }

Modal.defaultProps = { show: false, children: {} }

export default Modal
