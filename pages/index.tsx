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
import { Container, Row, Section, SectionCol } from "ui/Grid/Grid"
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
      <Section id="about" section="about">
        <Container>
          <Row>
            <SectionCol>
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
            </SectionCol>
            <SectionCol type="description">
              <Heading level="h2">Just the right food</Heading>
              <Text>
                Alkinoos Taverna is cosy, family owned, traditional Greek food restaurant. Outdoor Greek tavernas
                traditionally combine sunshine and nature, discover rich Mediterranean flavours.
              </Text>
              <Text>
                For Greeks, food is so much more than nourishment - it’s about culture, comfort, family and life itself.
                We believe that connection of traditional Greek recipes with addition of local, fresh materials, creates
                perfect balance for our meals.
              </Text>
              <Text>
                If you’ve been in Alkinoos Taverna, you’ve seen - and tasted what keeps our customers coming back for
                more.
              </Text>
              <img width={150} src="assets/images/landing/cook.jpg" alt="our chef" />
            </SectionCol>
          </Row>
        </Container>
      </Section>
      <Section id="menu" section="menu">
        <Container>
          <Row>
            <SectionCol>
              <picture>
                <source media="(min-width: 475px)" srcSet="assets/images/landing/brooke-lark-menu.jpg" />
                <img
                  className="img-fluid section__image"
                  src="assets/images/landing/brooke-lark-menu-xs.jpg"
                  alt="example dish from our restaurant"
                  loading="lazy"
                />
              </picture>
            </SectionCol>
            <SectionCol type="description">
              <article>
                <Heading level="h2">Discover our menu!</Heading>
                <Text>
                  Taste our famous traditional, authentic Greek dishes and do not miss our famous local wine list along
                  with your meal.
                </Text>
                <Text>
                  For those with pure food indulgence in mind, come next door and sate your desires with ever changing
                  seasonally inspired small plates. Our menu is filled with Greek ingredients and the freshest hand
                  picked ingredients available locally.
                </Text>
                <Text>
                  Our commitment is to nothing less than excellence and we will settle on nothing as it’s substitute. We
                  will customize any menu to meet your needs and tastes.
                </Text>
                <Button href={ROUTES.menu} variant="dark" size="large">
                  our menu
                </Button>
              </article>
            </SectionCol>
          </Row>
        </Container>
      </Section>

      <Section id="Reviews" section="testimonials">
        <Container>
          <Carousel loading={loading} error={error} testimonials={testimonials} />
        </Container>
      </Section>
      <Footer hours={hours} location={location} contact={contact} />
    </PageLayout>
  )
}
