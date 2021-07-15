import React from "react"
//import { NextApiRequest } from "next"

import { Navbar } from "ui/Navbar/Navbar"
import { PageLayout } from "layouts/PageLayout/PageLayout"
import { Heading } from "ui/Heading/Heading"
import { Text } from "ui/Text/Text"
import { Container, Row, Section } from "ui/Grid/Grid"
import { LoginForm } from "components/LoginForm/LoginForm"

export default function LoginPage() {
  const links = [
    { name: "Menu", link: "menu" },
    { name: "Book Table", link: "book-table" },
  ]

  return (
    <PageLayout>
      <Navbar links={links} hashlink={false} />
      <Container>
        <Row>
          <Section>
            <Heading level="h1">Login</Heading>
            <div className="login__content">
              <Text className="login__desc">
                This page is designed for the staff. After the successfull login process you will be redirected
                automatically to the staff dashboard
              </Text>
              <LoginForm />
            </div>
          </Section>
          <Section>
            <picture>
              <img src="/assets/images/brooke-lark-book-table.jpg" alt="" className="table-booking__image" />
            </picture>
          </Section>
        </Row>
      </Container>
    </PageLayout>
  )
}
