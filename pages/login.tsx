import React from "react";
import { motion } from "framer-motion";

import { pageTransitions } from "constants/config";
import { Navbar } from "ui/Navbar/Navbar";
import { Button } from "ui/Button/Button";
import auth0 from './api/utils/auth0'

export async function getServerSideProps({ req }) {
  const session = await auth0.getSession(req)

  return {
    props: {
      user: session?.user || null
    }
  }
}

export default function LoginPage() {
  const links = [
    { name: "Menu", link: "menu" },
    { name: "Book Table", link: "book-table" },
  ];

  return (
    <>
      <Navbar links={links} hashlink={false} />
      <motion.div
        initial="exit"
        animate="enter"
        exit="exit"
        variants={pageTransitions}
        className="container row"
      >
        <div className="section section__col login">
          <h1 className="heading">Login</h1>
          <div className="login__content">
            <p className="login__desc">
              Login process is simplified to redirect to <strong>Auth0</strong>{" "}
              where you will be asked to provide email/password combination.
            </p>
            <p className="login__desc">
              after the successfull login process you will be redirected
              automatically to the staff dashboard
            </p>
          </div>
          <Button
            data-testid="login-submit"
            href="/api/login"
            variant="dark"
            size="large"
          >
            Login
          </Button>
        </div>
        <div className="section section__col">
          <picture>
            <img
              src="/assets/images/brooke-lark-book-table.jpg"
              alt=""
              className="table-booking__image"
            />
          </picture>
        </div>
      </motion.div>
    </>
  );
}
