import React from "react"

import styles from "./Spinner.module.scss"
export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <img
        className="spinner__logo animate__animated animate__bounce animate__infinite"
        src="/assets/images/android-chrome-192x192.svg"
        alt="Alkinoos Taverna"
      />
    </div>
  )
}
