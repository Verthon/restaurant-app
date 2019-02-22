import React from 'react';

const footer = (props) => {
  const {week, weekend} = props.hours;
  const {street, number, code, city, province, country} = props.location;
  return (
    <footer className="site-footer">
      <div className="row">
        <div className="col col--center">
          <h2 className="site-footer__title">About us</h2>
          <p className="site-footer__description">
            Resto's new and expanded London location represents a truly authentic Greek patisserie,
            featuring breakfasts of fresh croissants and steaming bowls of cafe. 
            Resto the best restaurant in town.
          </p>
        </div>
        <div className="col col--center">
          <h2 className="site-footer__title">Opening Hours</h2>
          <p className="site-footer__description">
            {week.name} {week.time}
          </p>
          <p className="site-footer__description">
            {weekend.name} {weekend.time}
          </p>
        </div>
        <div className="col col--center">
          <h2 className="site-footer__title">Our Location</h2>
          <p className="site-footer__description">
            {number}th {street} 
          </p>
          <p className="site-footer__description">
            {code} {city}, {province}, {country}
          </p>
        </div>
      </div>
    </footer>
  );
}



export default footer;