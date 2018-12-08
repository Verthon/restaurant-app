import React from 'react';

const footer = () => {
  return (
    <footer className="site-footer">
      <div className="row">
        <div className="col-md-4">
          <h2 className="site-footer__title">About us</h2>
          <p className="site-footer__description">
            Resto's new and expanded London location represents a truly authentic Greek patisserie,
            featuring breakfasts of fresh croissants and steaming bowls of cafe. 
            Resto the best restaurant in town.
          </p>
        </div>
        <div className="col-md-4">
          <h2 className="site-footer__title">Opening Hours</h2>
          <p className="site-footer__description">
            Mon-Fri: 12:00am-10:00pm
          </p>
          <p className="site-footer__description">
            Fri-Sun: 9:00am-8:00pm
          </p>
        </div>
        <div className="col-md-4">
          <h2 className="site-footer__title">Our Location</h2>
          <p className="site-footer__description">
            18th Main Street 
          </p>
          <p className="site-footer__description">
            130-ABC London, Ontario, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}

export default footer;