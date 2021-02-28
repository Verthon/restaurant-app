import { ROUTES } from 'constants/routes'
import React from 'react'

import { Button } from 'ui/Button/Button'

const Header = () => (
  <header className="site-header container">
    <div className="site-header__image">
      <picture>
        <source media="(min-width: 767px)" srcSet="assets/images/header.jpg" />
        <source media="(min-width: 475px)" srcSet="assets/images/header-sm.jpg" />
        <img src="assets/images/header-xs.jpg" alt="" loading="lazy" />
      </picture>
    </div>
    <div className="site-header__content">
      <h1 className="site-header__headline" data-aos="fade">
        Alkinoos Taverna
      </h1>
      <p className="site-header__text" data-aos="fade-up" data-delay="500">
        The right ingredients for the right food. Family owned Mediterranean Cuisine with the finest farm-to-table
        ingredients.
      </p>
      <div className="site-header__buttons">
        <Button href={ROUTES.bookTable} variant="dark" size="large">
          book table
        </Button>
        <Button href={ROUTES.menu} variant="light" size="large">
          our menu
        </Button>
      </div>
    </div>
  </header>
)

export default Header
