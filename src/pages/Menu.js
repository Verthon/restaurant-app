import React, { useState, useEffect } from 'react'
import MenuItem from '../components/MenuItem'
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'
import db from '../firebase'
import { getCollection, getData } from '../utils/database'
import { formatMenu } from '../helpers'

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
    } catch (error) {
      handleLoading(false)
      handleError(error)
    }
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <Navbar />
      <section id='menu' className='section menu container fade-in'>
        <h1 className='heading heading--center menu__heading'>Menu</h1>
        <div className='row'>
          <div className='section__col'>
            <article className='menu__container'>
              <h2 className='menu__title'>Appetizers</h2>
              <ul className='menu__list'>
                {appetizers.map((item) => (
                  <MenuItem key={item.name} menu={item} />
                ))}
              </ul>
            </article>
          </div>

          <div className='section__col'>
            <h2 className='menu__title'>Desserts</h2>
            <ul className='menu__list'>
              {desserts.map((item) => (
                <MenuItem key={item.name} menu={item} />
              ))}
            </ul>
          </div>
        </div>

        <div className='row'>
          <div className='section__col'>
            <article className='menu__container'>
              <h2 className='menu__title'>Salads</h2>
              <ul className='menu__list'>
                {salads.map((item) => (
                  <MenuItem key={item.name} menu={item} />
                ))}
              </ul>
            </article>
          </div>

          <div className='section__col'>
            <article className='menu__container'>
              <h2 className='menu__title'>Main dishes</h2>
              <ul className='menu__list'>
                {maindishes.map((item) => (
                  <MenuItem key={item.name} menu={item} />
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu
