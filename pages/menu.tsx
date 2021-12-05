import React from "react"
import { motion } from "framer-motion"
import { GetStaticProps } from "next"
import { dehydrate, QueryClient, useQuery } from "react-query"

import { MenuList } from "ui/MenuList/MenuList"
import { Navbar } from "ui/Navbar/Navbar"
import { Container, Row, Section } from "ui/Grid/Grid"
import { PAGE_VARIANTS } from "constants/config"
import { PageLayout } from "layouts/PageLayout/PageLayout"
import { Heading } from "ui/Heading/Heading"
import styles from "styles/modules/Menu.module.scss"
import { getProducts } from "lib/supabase/supabaseClient"
import { Category } from "utils/menu"

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery("testimonials", getProducts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Menu() {
  const { isError, data, isLoading } = useQuery("posts", getProducts)
  const links = [
    { name: "Menu", link: "menu" },
    { name: "Book Table", link: "book-table" },
  ]

  return (
    <PageLayout>
      <Navbar links={links} hashlink={false} />
      <Container>
        <Section>
          <Row>
            <motion.div className="section__col" initial="exit" animate="enter" exit="exit">
              <motion.article className={styles.container} variants={PAGE_VARIANTS}>
                <Heading level="h2" color="primary">
                  Appetizers
                </Heading>
                <MenuList products={data} category={Category.Appetizers} isLoading={isLoading} isError={isError} />
              </motion.article>
            </motion.div>
            <motion.div className="section__col" initial="exit" animate="enter" exit="exit">
              <motion.article className={styles.container} variants={PAGE_VARIANTS}>
                <Heading level="h2" color="primary">
                  Desserts
                </Heading>
                <MenuList products={data} category={Category.Desserts} isLoading={isLoading} isError={isError} />
              </motion.article>
            </motion.div>
            <motion.div className="section__col" initial="exit" animate="enter" exit="exit">
              <motion.article className={styles.container} variants={PAGE_VARIANTS}>
                <Heading level="h2" color="primary">
                  Mains
                </Heading>
                <MenuList products={data} category={Category.Mains} isLoading={isLoading} isError={isError} />
              </motion.article>
            </motion.div>
            <motion.div className="section__col" initial="exit" animate="enter" exit="exit">
              <motion.article className={styles.container} variants={PAGE_VARIANTS}>
                <Heading level="h2" color="primary">
                  Salads
                </Heading>
                <MenuList products={data} category={Category.Salads} isLoading={isLoading} isError={isError} />
              </motion.article>
            </motion.div>
          </Row>
        </Section>
      </Container>
    </PageLayout>
  )
}
