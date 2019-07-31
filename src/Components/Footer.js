import React from 'react';

const footer = props => {
  const { week, weekend } = props.hours;
  const { street, number, code, city, province, country } = props.location;
  return (
    <footer id="Contact" className="site-footer section">
      <div className="row container">
        <div className="site-footer__column">
          <h2 className="site-footer__title">Opening Hours</h2>
          <p className="site-footer__description">
            {week.name}
          </p>
          <p className="site-footer__description">
            {week.time}
          </p>
          <p className="site-footer__description">
            {weekend.name}
          </p>
          <p className="site-footer__description">
            {weekend.time}
          </p>
        </div>
        <div className="site-footer__column">
          <h2 className="site-footer__title">Our Location</h2>
          <p className="site-footer__description">
            {number}th {street}
          </p>
          <p className="site-footer__description">
            {code} {city}, {province}, {country}
          </p>
        </div>
        <div className="site-footer__column">
          <h2 className="site-footer__title">Contact</h2>
          <p className="site-footer__description">
            Email: info@alkinoos.ca
          </p>
          <p className="site-footer__description">
            Phone: +1 555-555-555
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
