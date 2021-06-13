import React from "react"

interface OpeningTimes {
  days: string | null
  time: string | null
}

type RestaurantLocation = {
  address: string
  city: string
  code: string
  province: string
  country: string
}

type ContactInfo = {
  email: string
  phone: string
}

interface Props {
  hours: {
    weekdays: OpeningTimes | null
    weekend: OpeningTimes | null
  } | null
  location: RestaurantLocation | null
  contact: ContactInfo | null
}

const Footer = ({ hours, location, contact }: Props) => {
  if (hours && location && contact) {
    const { weekdays, weekend } = hours
    const { address, code, city, province, country } = location
    const { email, phone } = contact

    return (
      <footer id="contact" className="site-footer section">
        <div className="container site-footer__wrapper">
          <div className="site-footer__column">
            <h2 className="site-footer__title">Opening Hours</h2>
            <p className="site-footer__description">{weekdays?.days}</p>
            <p className="site-footer__description">{weekdays?.time}</p>
            <p className="site-footer__description">{weekend?.days}</p>
            <p className="site-footer__description">{weekend?.time}</p>
          </div>
          <div className="site-footer__column">
            <h2 className="site-footer__title">Our Location</h2>
            <p className="site-footer__description">{address}</p>
            <p className="site-footer__description">
              {code} {city}
            </p>
            <p className="site-footer__description">
              {province}, {country}
            </p>
          </div>
          <div className="site-footer__column">
            <h2 className="site-footer__title">Contact</h2>
            <p className="site-footer__description">{email}</p>
            <p className="site-footer__description">{phone}</p>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer id="contact" className="site-footer section">
      <div className="container site-footer__wrapper">
        <div className="site-footer__column">
          <h2 className="site-footer__title">Opening Hours</h2>
          <p className="site-footer__description"></p>
          <p className="site-footer__description"></p>
          <p className="site-footer__description"></p>
          <p className="site-footer__description"></p>
        </div>
        <div className="site-footer__column">
          <h2 className="site-footer__title">Our Location</h2>
          <p className="site-footer__description"></p>
          <p className="site-footer__description"></p>
          <p className="site-footer__description"></p>
        </div>
        <div className="site-footer__column">
          <h2 className="site-footer__title">Contact</h2>
          <p className="site-footer__description"></p>
          <p className="site-footer__description"></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
