import React from 'react'

import './MenuButton.scss'

type Props = {
  toggleNavbar: () => void
}

export const MenuButton = ({ toggleNavbar }: Props) => {
  return (
    <button
      className="nav__btn"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={toggleNavbar}
    >
      <span className="btn__line" />
      <span className="btn__line" />
      <span className="btn__line" />
    </button>
  )
}
