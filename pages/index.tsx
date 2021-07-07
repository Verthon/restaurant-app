import Head from "next/head"
import { ApolloError, gql } from "@apollo/client"

import { initializeApollo, addApolloState } from "lib/apollo/apolloClient"
import { useCompanyData } from "hooks/useCompanyData/useCompanyData"
import { Header } from "components/Header/Header"
import { Footer } from "components/Footer/Footer"
import { Navbar } from "ui/Navbar/Navbar"
import { Button } from "ui/Button/Button"
import { Carousel } from "components/Carousel/Carousel"

import React from "react"
import { GetStaticProps } from "next"
import { ROUTES } from "constants/routes"
import { PageLayout } from "layouts/PageLayout/PageLayout"
import "react-toastify/dist/ReactToastify.minimal.css"
import { Container } from "ui/Container/Container"

export type Testimonial = {
  id: number
  author: string
  text: string
}

type Props = {
  testimonials: Testimonial[]
  loading: boolean
  error: ApolloError | null
}

export const GET_TESTIMONIALS = gql`
  query GetTestimonials {
    testimonials {
      id
      author
      text
    }
  }
`

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo({})
  const { data, loading, error } = await client.query({
    query: GET_TESTIMONIALS,
  })

  return addApolloState(client, {
    props: {
      testimonials: data.testimonials,
      loading,
      error: error || null,
    },
  })
}

export default function Home({ testimonials, loading, error }: Props) {
  const { companyData } = useCompanyData()
  const links = [
    { name: "Menu", link: "menu" },
    { name: "Contact", link: "contact" },
  ]
  const { hours, location, contact } = companyData

  return (
    <PageLayout>
      <Head>
        <title>Alkinoos Taverna</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar links={links} hashlink withDashboard />
      <Header />
      <article id="about" className="section section__about">
        <Container>
          <div className="row">
            <div className="section__col">
              <picture>
                <source media="(min-width: 475px)" srcSet="assets/images/landing/brooke-lark-about.jpg" />
                <img
                  className="img-fluid"
                  src="assets/images/landing/brooke-lark-about-xs.jpg"
                  alt="example dish from our restaurant"
                  loading="lazy"
                />
              </picture>
              <picture>
                <source media="(min-width: 475px)" srcSet="assets/images/landing/brooke-lark-about1.jpg" />
                <img
                  className="img-fluid"
                  src="assets/images/landing/brooke-lark-about1-xs.jpg"
                  alt="example dish from our restaurant"
                  loading="lazy"
                />
              </picture>
            </div>
            <article className="section__col section__col--white section__col__description">
              <h2 className="section__about__title heading">Just the right food</h2>
              <p className="text section__description">
                Alkinoos Taverna is cosy, family owned, traditional Greek food restaurant. Outdoor Greek tavernas
                traditionally combine sunshine and nature, discover rich Mediterranean flavours.
              </p>
              <p className="text section__description">
                For Greeks, food is so much more than nourishment - it’s about culture, comfort, family and life itself.
                We believe that connection of traditional Greek recipes with addition of local, fresh materials, creates
                perfect balance for our meals.
              </p>
              <p className="text section__description">
                If you’ve been in Alkinoos Taverna, you’ve seen - and tasted what keeps our customers coming back for
                more.
              </p>
              <img className="section__about__chef" src="assets/images/landing/cook.jpg" alt="our chef" />
            </article>
          </div>
        </Container>
      </article>
      <div id="menu" className="section section__menu">
        <div className="row container">
          <div className="section__col">
            <picture>
              <source media="(min-width: 475px)" srcSet="assets/images/landing/brooke-lark-menu.jpg" />
              <img
                className="img-fluid section__image"
                src="assets/images/landing/brooke-lark-menu-xs.jpg"
                alt="example dish from our restaurant"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="section__col section__col--white section__col__description">
            <article className="section__menu-landing">
              <h2 className="heading">Discover our menu!</h2>
              <p className="text section__description">
                Taste our famous traditional, authentic Greek dishes and do not miss our famous local wine list along
                with your meal.
              </p>
              <p className="text section__description">
                For those with pure food indulgence in mind, come next door and sate your desires with ever changing
                seasonally inspired small plates. Our menu is filled with Greek ingredients and the freshest hand picked
                ingredients available locally.
              </p>
              <p className="text section__description">
                Our commitment is to nothing less than excellence and we will settle on nothing as it’s substitute. We
                will customize any menu to meet your needs and tastes.
              </p>
            </article>
            <div className="col-md-12 text-center">
              <Button href={ROUTES.menu} variant="dark" size="large">
                our menu
              </Button>
            </div>
          </div>
        </div>
      </div>

      <article id="Reviews" className="section section__testimonials">
        <div className="container">
          <Carousel loading={loading} error={error} testimonials={testimonials} />
        </div>
      </article>
      <Footer hours={hours} location={location} contact={contact} />
    </PageLayout>
  )
}
