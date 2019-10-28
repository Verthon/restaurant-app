import React from 'react'
import headerImgXs from '../images/header-xs.jpg'
import headerImgSm from '../images/header-sm.jpg'
import headerImg from '../images/header.jpg'

const Header = () => (
  <header className='site-header container fade-in'>
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
      <p className='text site-header__text' data-aos='fade-up' data-delay='500'>
        The right ingredients for the right food. Mediterranean Cuisine with
        long tradition.
      </p>
      <div className='site-header__buttons'>
        <a href='/book-table' className='btn btn--dark'>
          book a table
        </a>
        <a href='/menu' className='btn btn--light'>
          see the menu
        </a>
      </div>
    </div>
  </header>
)

export default Header
