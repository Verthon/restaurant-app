import Head from "next/head"
import { ApolloError, gql } from "@apollo/client"
import * as React from "react"
import { GetStaticProps } from "next"

import { initializeApollo, addApolloState } from "lib/apollo/apolloClient"
import { useCompanyData } from "hooks/useCompanyData/useCompanyData"
import { PageLayout } from "layouts/PageLayout/PageLayout"
import { Carousel } from "components/Carousel/Carousel"
import { Header } from "components/Header/Header"
import { Footer } from "components/Footer/Footer"
import { Navbar } from "ui/Navbar/Navbar"
import { Button } from "ui/Button/Button"
import { Container, Row } from "ui/Grid/Grid"
import { Heading } from "ui/Heading/Heading"
import { Text } from "ui/Text/Text"
import { ROUTES } from "constants/routes"

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
          <Row>
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
              <Heading level="h2">Just the right food</Heading>
              <Text className="section__description">
                Alkinoos Taverna is cosy, family owned, traditional Greek food restaurant. Outdoor Greek tavernas
                traditionally combine sunshine and nature, discover rich Mediterranean flavours.
              </Text>
              <Text className="section__description">
                For Greeks, food is so much more than nourishment - it’s about culture, comfort, family and life itself.
                We believe that connection of traditional Greek recipes with addition of local, fresh materials, creates
                perfect balance for our meals.
              </Text>
              <Text className="section__description">
                If you’ve been in Alkinoos Taverna, you’ve seen - and tasted what keeps our customers coming back for
                more.
              </Text>
              <img className="section__about__chef" src="assets/images/landing/cook.jpg" alt="our chef" />
            </article>
          </Row>
        </Container>
      </article>
      <div id="menu" className="section section__menu">
        <Container>
          <Row>
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
                <Heading level="h2">Discover our menu!</Heading>
                <Text className="section__description">
                  Taste our famous traditional, authentic Greek dishes and do not miss our famous local wine list along
                  with your meal.
                </Text>
                <Text className="section__description">
                  For those with pure food indulgence in mind, come next door and sate your desires with ever changing
                  seasonally inspired small plates. Our menu is filled with Greek ingredients and the freshest hand
                  picked ingredients available locally.
                </Text>
                <Text className="section__description">
                  Our commitment is to nothing less than excellence and we will settle on nothing as it’s substitute. We
                  will customize any menu to meet your needs and tastes.
                </Text>
              </article>
              <div className="col-md-12">
                <Button href={ROUTES.menu} variant="dark" size="large">
                  our menu
                </Button>
              </div>
            </div>
          </Row>
        </Container>
      </div>

      <article id="Reviews" className="section section__testimonials">
        <Container>
          <Carousel loading={loading} error={error} testimonials={testimonials} />
        </Container>
      </article>
      <Footer hours={hours} location={location} contact={contact} />
    </PageLayout>
  )
}
