import React from 'react';

const about = () => {
  return (
    <article id="about" class="section section__about">
      <div class="row">

        <div class="col-lg-6 col-md-12">
          <h2 class="section__about__title heading heading--gold">Just the right food</h2>
          <p class="section__about__description">If you’ve been to one of our restaurants, 
            you’ve seen – and tasted – what keeps our customers coming back for more. 
            Perfect materials and freshly baked food, delicious Lambda cakes,  
            muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!
          </p>
          <img class="img-fluid" src="/images/cook.jpg" alt="our chef" />
        </div>

        <div class="col-lg-6 col-md-12">
          <img class="img-fluid" src="/images/brooke-lark_shakes.jpg" alt="example dish from our restaurant" />
        </div>

      </div>
    </article>
  );
}

export default about;