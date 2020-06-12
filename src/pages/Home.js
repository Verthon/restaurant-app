import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import { ToastContainer } from 'react-toastify'
import '@brainhubeu/react-carousel/lib/style.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import { getCollection, getData } from '../utils/database'
import Spinner from '../components/Spinner'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Testimonial from '../components/Testimonial/Testimonial'
import Footer from '../components/Footer'
import { useCompanyData } from '../hooks/useCompanyData'
import 'aos/dist/aos.css'
import aboutImg from '../assets/images/landing/brooke-lark-about.jpg'
import about1Img from '../assets/images/landing/brooke-lark-about1.jpg'
import menuImg from '../assets/images/landing/brooke-lark-menu.jpg'
import menuImgXs from '../assets/images/landing/brooke-lark-menu-xs.jpg'
import aboutImgXs from '../assets/images/landing/brooke-lark-about-xs.jpg'
import about1ImgXs from '../assets/images/landing/brooke-lark-about1-xs.jpg'
import chef from '../assets/images/landing/cook.jpg'

const Home = () => {
  const { name, hours, location, contact, isLoading } = useCompanyData()
  const [dotValue, setDotValue] = useState(0)
  const [slides, setSlides] = useState([])

  useEffect(() => {
    AOS.init({ duration: 750 })
  }, [])

  useEffect(() => {
    getCollection('testimonials').then(snapshot => {
      const data = getData(snapshot)
      const allTestimonials = data.map(testimonial => (
        <Testimonial
          key={testimonial.id}
          author={testimonial.data.author}
          text={testimonial.data.text}
        />
      ))
      setSlides(allTestimonials)
    })
  }, [])

  const links = [
    { name: 'Menu', link: 'menu' },
    { name: 'Contact', link: 'contact' }
  ]
  if (isLoading) {
    return <Spinner />
  }
  // const [fromCache, handleCache] = useState(false)
  return (
    <>
      <ToastContainer
        className="toast__container"
        toastClassName="toast"
        progressClassName="toast__progress"
        autoClose={4000}
      />
      <Navbar name={name} links={links} hashlink withDashboard />
      <Header animation={['fade-up']} />
      <article id="about" className="section section__about">
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
              Alkinoos Taverna is cosy, family owned, traditional Greek food
              restaurant. Outdoor Greek tavernas traditionally combine sunshine
              and nature, discover rich Mediterranean flavours.
            </p>
            <p className="text section__description">
              For Greeks, food is so much more than nourishment - it’s about
              culture, comfort, family and life itself. We believe that
              connection of traditional Greek recipes with addition of local,
              fresh materials, creates perfect balance for our meals.
            </p>
            <p className="text section__description">
              If you’ve been in Alkinoos Taverna, you’ve seen - and tasted what
              keeps our customers coming back for more.
            </p>
            <img className="section__about__chef" src={chef} alt="our chef" />
          </article>
        </div>
      </article>
      <div id="menu" className="section section__menu">
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
            <article className="section__menu-landing">
              <h2 className="heading">Discover our menu!</h2>
              <p className="text section__description">
                Taste our famous traditional, authentic Greek dishes and do not
                miss our famous local wine list along with your meal.
              </p>
              <p className="text section__description">
                For those with pure food indulgence in mind, come next door and
                sate your desires with ever changing seasonally inspired small
                plates. Our menu is filled with Greek ingredients and the
                freshest hand picked ingredients available locally.
              </p>
              <p className="text section__description">
                Our commitment is to nothing less than excellence and we will
                settle on nothing as it’s substitute. We will customize any menu
                to meet your needs and tastes.
              </p>
            </article>
            <div className="col-md-12 text-center">
              <a
                href="/menu"
                className="btn btn--dark section__btn"
                data-aos="flip-up"
              >
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
              <Carousel
                slidesPerPage={1}
                centered
                value={dotValue}
                slides={slides}
                itemWidth={450}
                onChange={value => setDotValue(value)}
              />
              <Dots
                value={dotValue}
                onChange={value => setDotValue(value)}
                number={slides.length}
              />
            </div>
          </div>
        </div>
      </article>
      <Footer hours={hours} location={location} contact={contact} />
    </>
  )
}

export default Home
