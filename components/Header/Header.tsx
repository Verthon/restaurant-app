import { ROUTES } from "constants/routes"
import React from "react"

import { Button } from "ui/Button/Button"
import { Container } from "ui/Container/Container"
import { Heading } from "ui/Heading/Heading"
import styles from "./Header.module.scss"

export const Header = () => (
  <Container>
    <header className={styles.header}>
      <div className={styles.image}>
        <picture>
          <source media="(min-width: 767px)" srcSet="assets/images/header.jpg" />
          <source media="(min-width: 475px)" srcSet="assets/images/header-sm.jpg" />
          <img src="assets/images/header-xs.jpg" alt="" loading="lazy" />
        </picture>
      </div>
      <div className={styles.content}>
        <Heading level="h1" size="lg">
          Alkinoos Taverna
        </Heading>
        <p className={styles.text}>
          The right ingredients for the right food. Family owned Mediterranean Cuisine with the finest farm-to-table
          ingredients.
        </p>
        <div>
          <Button href={ROUTES.bookTable} variant="dark" size="large">
            book table
          </Button>
          <Button href={ROUTES.menu} variant="light" size="large">
            our menu
          </Button>
        </div>
      </div>
    </header>
  </Container>
)
