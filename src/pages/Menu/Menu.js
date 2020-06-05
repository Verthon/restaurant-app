import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MenuItem from '../../components/MenuItem/MenuItem'
import Navbar from '../../components/Navbar'
import Spinner from '../../components/Spinner'
import db from '../../firebase'
import { pageTransitions } from '../../constants/config'
import { getCollection, getData } from '../../utils/database'
import { formatMenu } from '../../utils/helpers'
import { notifyError } from '../../utils/notification'
import { DB_ERROR_MSG } from '../../constants/toastMessages'

const Menu = () => {
  const [appetizers, setAppetizers] = useState([])
  const [salads, setSalads] = useState([])
  const [maindishes, setMaindishes] = useState([])
  const [desserts, setDesserts] = useState([])
  const [error, handleError] = useState(null)
  const [loading, handleLoading] = useState(true)

  useEffect(() => {
    db.collection('menu').onSnapshot(
      { includeMetadataChanges: true },
      (snapshot) => snapshot
    )
    try {
      getCollection('menu').then((snapshot) => {
        const data = getData(snapshot)
        const menu = formatMenu(data)
        setAppetizers(menu.Appetizers)
        setDesserts(menu.Desserts)
        setSalads(menu.Salads)
        setMaindishes(menu.Mains)
        handleLoading(false)
      })
    } catch (err) {
      handleLoading(false)
      handleError(err)
      notifyError(DB_ERROR_MSG)
      console.log(error)
    }
  }, [error])

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <Navbar />
      <section id="menu" className="section menu container">
        <h1 className="heading heading--center menu__heading">Menu</h1>
        <div className="row">
          <motion.div className="section__col" initial="exit" animate="enter" exit="exit">
            <motion.article className="menu__container" variants={pageTransitions}>
              <h2 className="menu__title">Appetizers</h2>
              <ul className="menu__list">
                {appetizers.map((item) => (
                  <MenuItem key={item.name} menu={item} />
                ))}
              </ul>
            </motion.article>
          </motion.div>

          <motion.div className="section__col" initial="exit" animate="enter" exit="exit">
            <motion.article className="menu__container" variants={pageTransitions}>
              <h2 className="menu__title">Desserts</h2>
              <ul className="menu__list">
                {desserts.map((item) => (
                  <MenuItem key={item.name} menu={item} />
                ))}
              </ul>
            </motion.article>
          </motion.div>
        </div>

        <div className="row">
          <motion.div className="section__col" initial="exit" animate="enter" exit="exit">
            <motion.article className="menu__container" variants={pageTransitions}>
              <h2 className="menu__title">Salads</h2>
              <ul className="menu__list">
                {salads.map((item) => (
                  <MenuItem key={item.name} menu={item} />
                ))}
              </ul>
            </motion.article>
          </motion.div>

          <motion.div className="section__col" initial="exit" animate="enter" exit="exit">
            <motion.article className="menu__container" variants={pageTransitions}>
              <h2 className="menu__title">Main dishes</h2>
              <ul className="menu__list">
                {maindishes.map((item) => (
                  <MenuItem key={item.name} menu={item} />
                ))}
              </ul>
            </motion.article>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Menu
