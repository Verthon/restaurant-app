import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../helpers'

const MenuItem = ({ menu }) => {
  const { name, price, description } = menu

  return (
    <>
      <li className='menu__item'>
        <header className='menu__header'>
          <h3 className='menu__item__name'>{name}</h3>{' '}
          <span className='menu__item__price'>{formatPrice(price)}</span>
        </header>
        <p className='text menu__description'>{description}</p>
      </li>
    </>
  )
}

MenuItem.propTypes = {
  menu: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
}

MenuItem.defaultProps = {
  menu: PropTypes.shape({
    name: 'Baklava',
    description: 'The best cake in the world',
    price: '14.66$'
  })
}

export default MenuItem
