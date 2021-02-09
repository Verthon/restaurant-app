import React from 'react'
import { motion } from 'framer-motion'

import { formatPrice } from '../../utils/helpers'
import { pageTransitions } from '../../constants/config'
import styles from './MenuItem.module.scss'

type Props = {
  menu: {
    name: string
    price: number
    description: string
  }
}

export const MenuItem: React.FC<Props> = ({ menu }) => {
  const { name, price, description } = menu

  return (
    <>
      <motion.li className={styles.item} variants={pageTransitions}>
        <header className={styles.header}>
          <h3 className={styles.name}>{name}</h3> <span className={styles.price}>{formatPrice(price)}</span>
        </header>
        <p className={styles.description}>{description}</p>
      </motion.li>
    </>
  )
}
