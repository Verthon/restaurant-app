import React, { useState, useEffect, useContext } from 'react'
import AOS from 'aos'
import { ToastContainer } from 'react-toastify'
// import { notify } from '../utils/notification'
import { DataContext } from '../components/DataContext'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../scss/index.scss'
import 'aos/dist/aos.css'
import aboutImg from '../assets/images/landing/brooke-lark-about.jpg'
import about1Img from '../assets/images/landing/brooke-lark-about1.jpg'
import menuImg from '../assets/images/landing/brooke-lark-menu.jpg'
import menuImgXs from '../assets/images/landing/brooke-lark-menu-xs.jpg'
import aboutImgXs from '../assets/images/landing/brooke-lark-about-xs.jpg'
import about1ImgXs from '../assets/images/landing/brooke-lark-about1-xs.jpg'
import chef from '../assets/images/landing/cook.jpg'

const Home = () => {
  console.log('Home render counter')
  const [companyData, setCompanyData] = useState({
    hours: null,
    location: null,
    contact: null
  })
  const links = [{ name: 'Menu', link: 'menu' }, { name: 'Contact', link: 'contact' }]
  // const [fromCache, handleCache] = useState(false)

  const { state } = useContext(DataContext)
  useEffect(() => {
    AOS.init({ duration: 750 })
  }, [])
  useEffect(() => {
    if (state.company) {
      const data = state.company
      setCompanyData({
        ...companyData,
        hours: data.hours,
        location: data.location,
        contact: data.contact
      })
    }
  }, [state.company])

  return (
    <>
      <ToastContainer
        className="toast__container"
        toastClassName="toast"
        progressClassName="toast__progress"
        autoClose={4000}
      />
      <Navbar name={companyData.name} links={links} hashlink />
      <Header animation={['fade-up']} />
      <article id="About" className="section section__about">
        <div className="row container">
          <div className="section__col" data-aos="fade-down" data-delay="1500">
            <picture>
              <source media="(min-width: 475px)" srcSet={aboutImg} />
              <img
                className="img-fluid"
                src={aboutImgXs}
                alt="example dish from our restaurant"
              />
            </picture>
            <picture>
              <source media="(min-width: 475px)" srcSet={about1Img} />
              <img
                className="img-fluid"
                src={about1ImgXs}
                alt="example dish from our restaurant"
              />
            </picture>
          </div>
          <article
            className="section__col section__col--white section__col__description"
            data-aos="fade-up"
            data-delay="700"
          >
            <h2 className="section__about__title heading">
              Just the right food
            </h2>
            <p className="text section__description">
              If you’ve been to one of our restaurants, you’ve seen – and tasted
              – what keeps our customers coming back for more. Perfect materials
              and freshly baked food, delicious Baklava, Koulourakia, and
              gourmet coffees make us hard to resist! Stop in today and check us
              out!
            </p>
            <img className="section__about__chef" src={chef} alt="our chef" />
          </article>
        </div>
      </article>
      <div id="Menu" className="section section__menu">
        <div className="row container">
          <div className="section__col">
            <picture>
              <source media="(min-width: 475px)" srcSet={menuImg} />
              <img
                className="img-fluid section__image"
                src={menuImgXs}
                alt="example dish from our restaurant"
              />
            </picture>
          </div>
          <div className="section__col section__col--white section__col__description">
            <h2 className="heading">Discover our menu!</h2>
            <p className="text section__description">
              For those with pure food indulgence in mind, come next door and
              sate your desires with our ever changing internationally and
              seasonally inspired small plates. We love food, lots of different
              food, just like you.{' '}
            </p>
            <div className="col-md-12 text-center">
              <a href="/menu" className="btn btn--dark" data-aos="flip-up">
                our menu
              </a>
            </div>
          </div>
        </div>
      </div>

      <article id="Reviews" className="section section__testimonials">
        <div className="row container">
          <div className="testimonials">
            <div className="testimonials__modal">
              <h2 className="heading testimonials__modal__heading">
                Guest reviews
              </h2>
              <blockquote className="testimonials__modal__quote">
                <p className="text">
                  If you`ve been in Alkinoos Taverna, you`ve seen - and tasted -
                  what keeps customers coming back for more. Perfect materials
                  and freshly baked food, delicious Baklavas , Koulourakia, and
                  gourmet coffees make it hard to resist!
                </p>
                <p className="quote-writer" data-aos="fade" data-delay="500">
                  food magazine, Mark Blue
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </article>

      {companyData.hours ? (
        <Footer
          hours={companyData.hours}
          location={companyData.location}
          contact={companyData.contact}
        />
      ) : null}
    </>
  )
}

export default Home
