import React, { Component } from 'react'
import MenuItem from './MenuItem'
import Navbar from './Navbar'
import Spinner from './Spinner'
import db from '../firebase'

class Menu extends Component {
  constructor () {
    super()
    this.state = {
      appetizers: false,
      desserts: false,
      salads: false,
      maindishes: false,
      loading: true,
      links: ['menu', 'book-table']
    }
  }

  componentDidMount () {
    db.collection('menu')
      .onSnapshot({ includeMetadataChanges: true }, (snapshot) => snapshot)
    db.collection('menu')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.setState({
            appetizers: doc.data().Appetizers,
            desserts: doc.data().Desserts,
            salads: doc.data().Salads,
            maindishes: doc.data().Mains
          })
        })
      })
      .then(() => {
        this.setState({ loading: false })
      })
  }

  render () {
    const { appetizers, desserts, salads, maindishes, links, loading } = this.state
    if (loading) {
      return (
        <Spinner />
      )
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
                  {appetizers.map(item => (
                    <MenuItem key={item.name} menu={item} />
                  ))}
                </ul>
              </article>
            </div>

            <div className='section__col'>
              <h2 className='menu__title'>Desserts</h2>
              <ul className='menu__list'>
                {desserts.map(item => (
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
                  {salads.map(item => (
                    <MenuItem key={item.name} menu={item} />
                  ))}
                </ul>
              </article>
            </div>

            <div className='section__col'>
              <article className='menu__container'>
                <h2 className='menu__title'>Main dishes</h2>
                <ul className='menu__list'>
                  {maindishes.map(item => (
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
}

export default Menu
