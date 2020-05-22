import React from 'react'
import headerImgXs from '../assets/images/header-xs.jpg'
import headerImgSm from '../assets/images/header-sm.jpg'
import headerImg from '../assets/images/header.jpg'

const Header = () => (
  <header className='site-header container'>
    <div className='site-header__image'>
      <picture>
        <source media='(min-width: 767px)' srcSet={headerImg} />
        <source media='(min-width: 475px)' srcSet={headerImgSm} />
        <img src={headerImgXs} alt='' />
      </picture>
    </div>
    <div className='site-header__content'>
      <h1 className='site-header__headline' data-aos='fade'>
        Alkinoos Taverna
      </h1>
      <p className='site-header__text' data-aos='fade-up' data-delay='500'>
        The right ingredients for the right food. Family owned Mediterranean Cuisine with
        the finest farm-to-table ingredients.
      </p>
      <div className='site-header__buttons'>
        <a href='/book-table' className='btn btn--dark btn--large'>
          book table
        </a>
        <a href='/menu' className='btn btn--light btn--large'>
          our menu
        </a>
      </div>
    </div>
  </header>
)

export default Header
