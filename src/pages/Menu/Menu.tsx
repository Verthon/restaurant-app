import React from 'react'
import { motion } from 'framer-motion'
import { MenuList } from '../../ui/MenuList/MenuList'
import { Navbar } from '../../ui/Navbar/Navbar'
import { Spinner } from '../../ui/Spinner/Spinner'
import { pageTransitions } from '../../constants/config'
import { Props } from './Menu.types'

export const Menu = ({ appetizers, desserts, mains, salads, isLoading, refetch, error }: Props) => {
  const links = [{ name: 'Menu', link: 'menu' }, { name: 'Book Table', link: 'book-table' }]

  if (isLoading) {
    return (
      <>
        <Navbar links={links} hashlink={false} />
        <section id="menu" className="section menu container">
          <h1 className="heading heading--center menu__heading">Menu</h1>
          <Spinner />
        </section>
      </>
    )
  }

  return (
    <>
      <Navbar links={links} hashlink={false} />
      <section id="menu" className="section menu container">
        <h1 className="heading heading--center menu__heading">Menu</h1>
        {error ? (
          <button className="btn" onClick={() => refetch()}>
            Refetch menu
          </button>
        ) : null}
        <div className="row">
          <motion.div className="section__col" initial="exit" animate="enter" exit="exit">
            <motion.article className="menu__container" variants={pageTransitions}>
              <h2 className="menu__title">Appetizers</h2>
              <MenuList category={appetizers} />
            </motion.article>
          </motion.div>
          <motion.div className="section__col" initial="exit" animate="enter" exit="exit">
            <motion.article className="menu__container" variants={pageTransitions}>
              <h2 className="menu__title">Desserts</h2>
              <MenuList category={desserts} />
            </motion.article>
          </motion.div>
          <motion.div className="section__col" initial="exit" animate="enter" exit="exit">
            <motion.article className="menu__container" variants={pageTransitions}>
              <h2 className="menu__title">Mains</h2>
              <MenuList category={mains} />
            </motion.article>
          </motion.div>
          <motion.div className="section__col" initial="exit" animate="enter" exit="exit">
            <motion.article className="menu__container" variants={pageTransitions}>
              <h2 className="menu__title">Salads</h2>
              <MenuList category={salads} />
            </motion.article>
          </motion.div>
        </div>
      </section>
    </>
  )
}
