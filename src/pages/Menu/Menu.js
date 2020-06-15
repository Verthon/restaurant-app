import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MenuItem from '../../components/MenuItem/MenuItem'
import Navbar from '../../components/Navbar'
import Spinner from '../../components/Spinner'
import { pageTransitions } from '../../constants/config'
import { formatMenu } from '../../utils/helpers'
import { useGetCollection } from '../../hooks/useGetCollection'

const Menu = () => {
  const [menu, setMenu] = useState({})
  const { isLoading, data } = useGetCollection({ collectionName: 'menu' })

  useEffect(() => {
    const formattedMenu = formatMenu(data)
    setMenu(formattedMenu)
  }, [isLoading, data])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Navbar />
      <section id="menu" className="section menu container">
        <h1 className="heading heading--center menu__heading">Menu</h1>
        <div className="row">
          {menu.map(category => {
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
                    {category.data.data
                      ? category.data.data.map(item => (
                        <MenuItem key={item.name} menu={item} />
                      ))
                      : null}
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
