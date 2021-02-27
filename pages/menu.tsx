import React from "react";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";

import { MenuList } from "ui/MenuList/MenuList";
import { Navbar } from "ui/Navbar/Navbar";
import { Container } from "ui/Container/Container";
import { pageTransitions } from "constants/config";
import { formatMenu } from "utils/menu";
import { gql } from "@apollo/client";
import { client } from "lib/apollo/apolloClient";
import { MenuState } from "hooks/useMenuData/useMenuData.types";

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
`;

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.query({ query: GET_MENU });

  const menu = formatMenu(response.data.products);

  return {
    props: {
      menu,
    },
  };
};

export default function Menu({ menu }: { menu: MenuState }) {
  const links = [
    { name: "Menu", link: "menu" },
    { name: "Book Table", link: "book-table" },
  ];

  return (
    <>
      <Navbar links={links} hashlink={false} />
      <Container>
        <section id="menu" className="section menu">
          <h1 className="heading heading--center menu__heading">Menu</h1>
          <div className="row">
            <motion.div
              className="section__col"
              initial="exit"
              animate="enter"
              exit="exit"
            >
              <motion.article
                className="menu__container"
                variants={pageTransitions}
              >
                <h2 className="menu__title">Appetizers</h2>
                <MenuList category={menu.appetizers} />
              </motion.article>
            </motion.div>
            <motion.div
              className="section__col"
              initial="exit"
              animate="enter"
              exit="exit"
            >
              <motion.article
                className="menu__container"
                variants={pageTransitions}
              >
                <h2 className="menu__title">Desserts</h2>
                <MenuList category={menu.desserts} />
              </motion.article>
            </motion.div>
            <motion.div
              className="section__col"
              initial="exit"
              animate="enter"
              exit="exit"
            >
              <motion.article
                className="menu__container"
                variants={pageTransitions}
              >
                <h2 className="menu__title">Mains</h2>
                <MenuList category={menu.mains} />
              </motion.article>
            </motion.div>
            <motion.div
              className="section__col"
              initial="exit"
              animate="enter"
              exit="exit"
            >
              <motion.article
                className="menu__container"
                variants={pageTransitions}
              >
                <h2 className="menu__title">Salads</h2>
                <MenuList category={menu.salads} />
              </motion.article>
            </motion.div>
          </div>
        </section>
      </Container>
    </>
  );
}
