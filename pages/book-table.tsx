import React from "react"

import { useCompanyData } from "hooks/useCompanyData/useCompanyData"
import { Container, Section, SectionCol } from "ui/Grid/Grid"
import { Navbar } from "ui/Navbar/Navbar"
import { BookingForm } from "components/BookingForm/BookingForm"
import { PageLayout } from "layouts/PageLayout/PageLayout"

export default function BookTable() {
  const { companyData } = useCompanyData()
  const { hours, location, contact } = companyData

  return (
    <PageLayout>
      <Navbar />
      <div className="table-booking">
        <Container>
          <div className="table-booking__wrapper">
            <Section>
              <SectionCol>
                <h2 className="table-booking__subtitle">Make a reservation</h2>
                <BookingForm />
              </SectionCol>
            </Section>
            <Section>
              <SectionCol>
                <h2 className="table-booking__subtitle">Located in London</h2>
                <p>{location.address}</p>
                <p>
                  {location.city}, {location.province}, {location.code}
                </p>
                <p>{contact.phone}</p>

                <h2 className="table-booking__subtitle">Hours of operation</h2>
                <p>
                  {hours.weekdays.days} {hours.weekdays?.time}
                </p>
                <p>
                  {hours.weekend.days} {hours.weekend.time}
                </p>
              </SectionCol>
            </Section>
            {/* <Section>
              <SectionCol>
                <picture>
                  <img
                    src="/assets/images/brooke-lark-book-table.jpg"
                    alt=""
                    className="table-booking__image"
                    loading="lazy"
                  />
                </picture>
              </SectionCol>
            </Section> */}
          </div>
        </Container>
      </div>
    </PageLayout>
  )
}
