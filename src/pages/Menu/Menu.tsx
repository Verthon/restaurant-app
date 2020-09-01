import React from 'react'
import { motion } from 'framer-motion'
import { MenuList } from '../../ui/MenuList/MenuList'
import { Navbar } from '../../ui/Navbar/Navbar'
import { Spinner } from '../../ui/Spinner/Spinner'
import { pageTransitions } from '../../constants/config'
import { Props } from './Menu.types'

type MenuData = {
  description: string
  name: string
  price: number
}

type MenuCategory = {
  id: string
  data: {
    data: Array<MenuData>
  }
}

export const Menu = ({ menu, isLoading }: Props) => {
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
        <div className="row">
          {menu.map((category: MenuCategory) => {
            return (
              <motion.div className="section__col" initial="exit" animate="enter" exit="exit" key={category.id}>
                <motion.article className="menu__container" variants={pageTransitions}>
                  <h2 className="menu__title">{category.id}</h2>
                  <MenuList category={category}/>
                </motion.article>
              </motion.div>
            )
          })}
        </div>
      </section>
    </>
  )
}
