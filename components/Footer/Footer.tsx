import * as React from "react"
import cx from "classnames"

import { Container } from "ui/Container/Container"
import { Props } from "./Footer.types"
import styles from "./Footer.module.scss"

export const Footer = ({ hours, location, contact }: Props) => {
  if (hours && location && contact) {
    const { weekdays, weekend } = hours
    const { address, code, city, province, country } = location
    const { email, phone } = contact

    return (
      <footer id="contact" className={cx(styles.footer)}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.column}>
              <h2 className={styles.title}>Opening Hours</h2>
              <p className={styles.description}>{weekdays?.days}</p>
              <p className={styles.description}>{weekdays?.time}</p>
              <p className={styles.description}>{weekend?.days}</p>
              <p className={styles.description}>{weekend?.time}</p>
            </div>
            <div className={styles.column}>
              <h2 className={styles.title}>Our Location</h2>
              <p className={styles.description}>{address}</p>
              <p className={styles.description}>
                {code} {city}
              </p>
              <p className={styles.description}>
                {province}, {country}
              </p>
            </div>
            <div className={styles.column}>
              <h2 className={styles.title}>Contact</h2>
              <p className={styles.description}>{email}</p>
              <p className={styles.description}>{phone}</p>
            </div>
          </div>
        </Container>
      </footer>
    )
  }

  return (
    <footer id="contact" className="site-footer section">
      <div className="container site-footer__wrapper">
        <div className={styles.column}>
          <h2 className={styles.title}>Opening Hours</h2>
          <p className={styles.description}></p>
          <p className={styles.description}></p>
          <p className={styles.description}></p>
          <p className={styles.description}></p>
        </div>
        <div className={styles.column}>
          <h2 className={styles.title}>Our Location</h2>
          <p className={styles.description}></p>
          <p className={styles.description}></p>
          <p className={styles.description}></p>
        </div>
        <div className={styles.column}>
          <h2 className={styles.title}>Contact</h2>
          <p className={styles.description}></p>
          <p className={styles.description}></p>
        </div>
      </div>
    </footer>
  )
}
