import React from 'react'
import { motion } from 'framer-motion'
import MenuItem from '../../components/MenuItem/MenuItem'
import Navbar from '../../components/Navbar'
import Spinner from '../../components/Spinner'
import { pageTransitions } from '../../constants/config'
import { useMenuData } from '../../hooks/useMenuData'

type MenuData = {
  description: string,
  name: string,
  price: number
}

type MenuCategory = {
  id: string,
  data: {
    data: Array<MenuData>
  }
}

const Menu = () => {
  const { menu, isLoading } = useMenuData()
  const links = [
    { name: 'Menu', link: 'menu' },
    { name: 'Book Table', link: 'book-table' }
  ]

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Navbar links={links} hashlink={false} />
      <section id="menu" className="section menu container">
        <h1 className="heading heading--center menu__heading">Menu</h1>
        <div className="row">
          {menu.map((category: MenuCategory) => {
            return (
              <motion.div
                className="section__col"
                initial="exit"
                animate="enter"
                exit="exit"
                key={category.id}
              >
                <motion.article
                  className="menu__container"
                  variants={pageTransitions}
                >
                  <h2 className="menu__title">{category.id}</h2>
                  <ul className="menu__list">
                    {category.data.data &&
                      category.data.data.map((item: MenuData) => (
                        <MenuItem key={item.name} menu={item} />
                      ))}
                  </ul>
                </motion.article>
              </motion.div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Menu
