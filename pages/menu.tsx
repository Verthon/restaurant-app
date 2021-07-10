import React from "react"
import { motion } from "framer-motion"
import { GetStaticProps } from "next"
import { ApolloError, gql } from "@apollo/client"
import { initializeApollo } from "lib/apollo/apolloClient"

import { MenuList } from "ui/MenuList/MenuList"
import { Navbar } from "ui/Navbar/Navbar"
import { Container, Row } from "ui/Grid/Grid"
import { PAGE_VARIANTS } from "constants/config"
import { formatMenu } from "utils/menu"
import { MenuState } from "hooks/useMenuData/useMenuData.types"
import { PageLayout } from "layouts/PageLayout/PageLayout"
import { Heading } from "ui/Heading/Heading"

type Props = {
  menu: MenuState
  loading: boolean
  error: ApolloError | null
}

const GET_MENU = gql`
  query getMenu {
    products {
      price
      name
      id
      description
      category_id
      category {
        id
        name
      }
    }
  }
`

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo(null)
  const { data, loading, error } = await client.query({ query: GET_MENU })

  const menu = formatMenu(data.products)

  return {
    props: {
      menu,
      loading,
      error: error || null,
    },
  }
}

export default function Menu({ menu }: Props) {
  const links = [
    { name: "Menu", link: "menu" },
    { name: "Book Table", link: "book-table" },
  ]

  return (
    <PageLayout>
      <Navbar links={links} hashlink={false} />
      <Container>
        <section id="menu" className="section menu">
          <Heading level="h1">Menu</Heading>
          <Row>
            <motion.div className="section__col" initial="exit" animate="enter" exit="exit">
              <motion.article className="menu__container" variants={PAGE_VARIANTS}>
                <Heading level="h2" color="primary">
                  Appetizers
                </Heading>
                <MenuList category={menu.appetizers} />
              </motion.article>
            </motion.div>
            <motion.div className="section__col" initial="exit" animate="enter" exit="exit">
              <motion.article className="menu__container" variants={PAGE_VARIANTS}>
                <Heading level="h2" color="primary">
                  Desserts
                </Heading>
                <MenuList category={menu.desserts} />
              </motion.article>
            </motion.div>
            <motion.div className="section__col" initial="exit" animate="enter" exit="exit">
              <motion.article className="menu__container" variants={PAGE_VARIANTS}>
                <Heading level="h2" color="primary">
                  Mains
                </Heading>
                <MenuList category={menu.mains} />
              </motion.article>
            </motion.div>
            <motion.div className="section__col" initial="exit" animate="enter" exit="exit">
              <motion.article className="menu__container" variants={PAGE_VARIANTS}>
                <Heading level="h2" color="primary">
                  Salads
                </Heading>
                <MenuList category={menu.salads} />
              </motion.article>
            </motion.div>
          </Row>
        </section>
      </Container>
    </PageLayout>
  )
}
