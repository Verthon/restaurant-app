import React from 'react'

import styles from './MenuButton.module.scss'

type Props = {
  toggleNavbar: () => void
}

export const MenuButton = ({ toggleNavbar }: Props) => {
  return (
    <button
      className={styles.button}
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={toggleNavbar}
    >
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </button>
  )
}
