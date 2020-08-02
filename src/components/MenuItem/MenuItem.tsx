import React from 'react'
import { motion } from 'framer-motion'
import { formatPrice } from '../../utils/helpers'
import { pageTransitions } from '../../constants/config'

type Props = {
  menu: {
    name: string
    price: number
    description: string
  }
}

const MenuItem: React.FC<Props> = ({ menu }) => {
  const { name, price, description } = menu

  return (
    <>
      <motion.li className="menu__item" variants={pageTransitions}>
        <header className="menu__header">
          <h3 className="menu__item__name">{name}</h3> <span className="menu__item__price">{formatPrice(price)}</span>
        </header>
        <p className="text menu__description">{description}</p>
      </motion.li>
    </>
  )
}

export default MenuItem
