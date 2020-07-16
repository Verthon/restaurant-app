import React from 'react'

type Props = {
  show: boolean
  children: React.ReactNode
}

const Modal: React.FC<Props> = ({ show, children }) => {
  const activeClassName = show ? 'modal-book--active' : 'modal-book--disabled'
  return (
    <div className={`modal-book ${activeClassName}`}>
      <article className="modal-book__content fade-in">{children}</article>
    </div>
  )
}

export default Modal
