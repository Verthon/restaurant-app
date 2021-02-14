import Head from "next/head";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import { gql } from "@apollo/client";

import { client } from "lib/apollo/apolloClient"
import { useCompanyData } from "hooks/useCompanyData/useCompanyData";
import Header from "components/Header";
import Footer from "components/Footer";
import { Navbar } from "ui/Navbar/Navbar";
import { Button } from "ui/Button/Button";

import styles from "ui/Testimonial/Testimonial.module.scss";

export const GET_TESTIMONIALS = gql`
  query GetTestimonials {
    testimonials {
      id
      author
      text
    }
  }
`;

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_TESTIMONIALS });

  return {
    props: {
      testimonials: data.testimonials,
    },
  };
}

export default function Home({ testimonials }) {
  const { companyData } = useCompanyData();
  const links = [
    { name: "Menu", link: "menu" },
    { name: "Contact", link: "contact" },
  ];
  const { hours, location, contact } = companyData;
  const [dotValue, setDotValue] = useState(0);

  return (
    <>
      <Head>
        <title>Alkinoos Taverna</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer
        className="toast__container"
        toastClassName="toast"
        progressClassName="toast__progress"
        autoClose={4000}
      />
      <Navbar links={links} hashlink withDashboard />
      <Header />
      <article id="about" className="section section__about">
        <div className="row container">
          <div className="section__col" data-aos="fade-down" data-delay="1500">
            <picture>
              <source
                media="(min-width: 475px)"
                srcSet="assets/images/landing/brooke-lark-about.jpg"
              />
              <img
                className="img-fluid"
                src="assets/images/landing/brooke-lark-about-xs.jpg"
                alt="example dish from our restaurant"
                loading="lazy"
              />
            </picture>
            <picture>
              <source
                media="(min-width: 475px)"
                srcSet="assets/images/landing/brooke-lark-about1.jpg"
              />
              <img
                className="img-fluid"
                src="assets/images/landing/brooke-lark-about1-xs.jpg"
                alt="example dish from our restaurant"
                loading="lazy"
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
            <img
              className="section__about__chef"
              src="assets/images/landing/cook.jpg"
              alt="our chef"
            />
          </article>
        </div>
      </article>
      <div id="menu" className="section section__menu">
        <div className="row container">
          <div className="section__col">
            <picture>
              <source
                media="(min-width: 475px)"
                srcSet="assets/images/landing/brooke-lark-menu.jpg"
              />
              <img
                className="img-fluid section__image"
                src="assets/images/landing/brooke-lark-menu-xs.jpg"
                alt="example dish from our restaurant"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="section__col section__col--white section__col__description">
            <article
              className="section__menu-landing"
              data-aos="fade-up"
              data-delay="700"
            >
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
              <Button
                href="/menu"
                variant="dark"
                size="large"
                data-aos="flip-up"
              >
                our menu
              </Button>
            </div>
          </div>
        </div>
      </div>

      <article id="Reviews" className="section section__testimonials">
        <div className="container">
          <div className="testimonials">
            <div className={styles.modal}>
              <h2 className={styles.heading}>Guest reviews</h2>
              {/* <Carousel
                slidesPerPage={1}
                centered
                value={dotValue}
                slides={testimonials}
                itemWidth={450}
                onChange={(value) => setDotValue(value)}
              />
              <Dots
                value={dotValue}
                onChange={(value) => setDotValue(value)}
                number={testimonials?.length}
              /> */}
            </div>
          </div>
        </div>
      </article>
      <Footer hours={hours} location={location} contact={contact} />
    </>
  );
}