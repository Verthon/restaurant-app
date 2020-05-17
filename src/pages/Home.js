/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useContext } from 'react'
import AOS from 'aos'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DataContext } from '../components/DataContext'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../scss/index.scss'
import db from '../firebase'
import { getCollection } from '../utils/database'
import 'aos/dist/aos.css'
import aboutImg from '../images/brooke-lark-about.jpg'
import about1Img from '../images/brooke-lark-about1.jpg'
import menuImg from '../images/brooke-lark-menu.jpg'
import menuImgXs from '../images/brooke-lark-menu-xs.jpg'
import aboutImgXs from '../images/brooke-lark-about-xs.jpg'
import about1ImgXs from '../images/brooke-lark-about1-xs.jpg'
import chef from '../images/cook.jpg'

const Home = () => {
  const [location, setLocation] = useState({})
  const [hours, setHours] = useState(false)
  const links = ['Menu', 'Contact']
  const [fromCache, handleCache] = useState(false)

  const checkContext = useContext(DataContext)
  console.log('checkContext', checkContext)

  const notify = () =>
    toast('Offline mode detected. Application is working on cached version')
  useEffect(() => {
    AOS.init({ duration: 1000 })
    db.collection('location').onSnapshot(
      { includeMetadataChanges: true },
      (snapshot) => {
        snapshot.metadata.fromCache ? handleCache(true) : handleCache(false)
      }
    )
    db.collection('hours').onSnapshot(
      { includeMetadataChanges: true },
      (snapshot) => snapshot
    )
    getCollection('location').then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        setLocation(doc.data())
      })
    })
    getCollection('hours').then((snapshot) => {
      if (snapshot.metadata.fromCache) {
        fromCache(true)
        notify
      }
      snapshot.docs.forEach((doc) => {
        setHours(doc.data())
      })
    })
  }, [])

  return (
    <>
      <ToastContainer
        className='toast__container'
        toastClassName='toast'
        progressClassName='toast__progress'
        autoClose={4000}
      />
      <Navbar name={hours.name} links={links} hashlink />
      <Header animation={['fade-up']} />
      <article id='About' className='section section__about'>
        <div className='row container'>
          <div className='section__col' data-aos='fade-down' data-delay='1500'>
            <picture>
              <source media='(min-width: 475px)' srcSet={aboutImg} />
              <img
                className='img-fluid'
                src={aboutImgXs}
                alt='example dish from our restaurant'
              />
            </picture>
            <picture>
              <source media='(min-width: 475px)' srcSet={about1Img} />
              <img
                className='img-fluid'
                src={about1ImgXs}
                alt='example dish from our restaurant'
              />
            </picture>
          </div>
          <article
            className='section__col section__col--white section__col__description'
            data-aos='fade-up'
            data-delay='700'
          >
            <h2 className='section__about__title heading'>
              Just the right food
            </h2>
            <p className='text section__description'>
              If you’ve been to one of our restaurants, you’ve seen – and tasted
              – what keeps our customers coming back for more. Perfect materials
              and freshly baked food, delicious Baklava, Koulourakia, and
              gourmet coffees make us hard to resist! Stop in today and check us
              out!
            </p>
            <img className='section__about__chef' src={chef} alt='our chef' />
          </article>
        </div>
      </article>
      <div id='Menu' className='section section__menu'>
        <div className='row container'>
          <div className='section__col'>
            <picture>
              <source media='(min-width: 475px)' srcSet={menuImg} />
              <img
                className='img-fluid section__image'
                src={menuImgXs}
                alt='example dish from our restaurant'
              />
            </picture>
          </div>
          <div className='section__col section__col--white section__col__description'>
            <h2 className='heading'>Discover our menu!</h2>
            <p className='text section__description'>
              For those with pure food indulgence in mind, come next door and
              sate your desires with our ever changing internationally and
              seasonally inspired small plates. We love food, lots of different
              food, just like you.{' '}
            </p>
            <div className='col-md-12 text-center'>
              <a href='/menu' className='btn btn--dark' data-aos='flip-up'>
                see the menu
              </a>
            </div>
          </div>
        </div>
      </div>

      <article id='Reviews' className='section section__testimonials'>
        <div className='row container'>
          <div className='testimonials'>
            <div className='testimonials__modal'>
              <h2 className='heading testimonials__modal__heading'>
                Guest reviews
              </h2>
              <blockquote className='text testimonials__modal__quote'>
                If you`ve been to one of our restaurants, you`ve seen - and
                tasted - what keeps our customers coming back for more. Perfect
                materials and freshly baked food, delicious Baklavas ,
                Koulourakia, and gourmet coffees make us hard to resist! Stop in
                today and check out us
                <p className='quote-writer' data-aos='fade' data-delay='500'>
                  food magazine, Mark Blue
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </article>

      {hours ? <Footer hours={hours} location={location} /> : null}
    </>
  )
}

export default Home
