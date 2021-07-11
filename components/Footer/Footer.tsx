import * as React from "react"
import cx from "classnames"

import { Container } from "ui/Grid/Grid"
import { Props } from "./Footer.types"
import styles from "./Footer.module.scss"
import { Heading } from "ui/Heading/Heading"

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
              <Heading level="h3" variant="sm">
                Opening Hours
              </Heading>
              <p className={styles.description}>{weekdays?.days}</p>
              <p className={styles.description}>{weekdays?.time}</p>
              <p className={styles.description}>{weekend?.days}</p>
              <p className={styles.description}>{weekend?.time}</p>
            </div>
            <div className={styles.column}>
              <Heading level="h3" variant="sm">
                Our Location
              </Heading>
              <p className={styles.description}>{address}</p>
              <p className={styles.description}>
                {code} {city}
              </p>
              <p className={styles.description}>
                {province}, {country}
              </p>
            </div>
            <div className={styles.column}>
              <Heading level="h3" variant="sm">
                Contact
              </Heading>
              <p className={styles.description}>{email}</p>
              <p className={styles.description}>{phone}</p>
            </div>
          </div>
        </Container>
      </footer>
    )
  }

  return null
}
