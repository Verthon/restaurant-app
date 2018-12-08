import React from 'react';

const reviews = () => {
  return (
    <article id="reviews" className="section section__testimonials">
      <div className="row">
        <div className="offset-sm-2"></div>
        <div className="col-sm-8">
          <div className="section__testimonials__modal">
            <h2 className="testimonials__modal__heading">Guest reviews</h2>
            <blockquote className="testimonials__modal__quote">If you've been to one of our 
              restaurants, you've seen - and tasted - what keeps our customers coming back for
            more. Perfect materials and freshly baked food, delicious Resto cakes, muffins, 
          and gourmet coffees make us hard to resist! Stop in today and check out us
        <p className="quote-writer">food magazine, Mark Blue</p></blockquote>
          </div>
        </div>
      </div>
    </article>
  );
}

export default reviews;