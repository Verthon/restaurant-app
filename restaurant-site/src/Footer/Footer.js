import React from 'react';

const footer = () => {
  return (
    <footer class="site-footer">
      <div class="row">
        <div class="col-md-4">
          <h2 class="site-footer__title">About us</h2>
          <p class="site-footer__description">
            Resto's new and expanded London location represents a truly authentic Greek patisserie,
            featuring breakfasts of fresh croissants and steaming bowls of cafe. 
            Resto the best restaurant in town.
          </p>
        </div>
        <div class="col-md-4">
          <h2 class="site-footer__title">Opening Hours</h2>
          <p class="site-footer__description">
            Mon-Thu: 8:00am-7:00pm
          </p>
          <p class="site-footer__description">
            Fri-Sun: 7:00am-10:00pm
          </p>
        </div>
        <div class="col-md-4">
          <h2 class="site-footer__title">Our Location</h2>
          <p class="site-footer__description">
            18th Main Street 
          </p>
          <p class="site-footer__description">
            130-ABC London, Ontario, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}

export default footer;