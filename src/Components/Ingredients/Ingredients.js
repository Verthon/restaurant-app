import React from 'react';

const ingredients = () => {
  return(
    <section id="ingredients" className="section section__ingredients">
      <div className="row">

        <div className="offset-md-3 offset-lg-1"></div>

        <div className="col-lg-10 col-sm-12">
          <article className="section__ingredients__modal">
            <h2 className="section__ingredients__title heading">Fine ingredients</h2>
            <p className="section__ingredients__description">If you’ve been to one of our restaurants, 
                you’ve seen – and tasted – what keeps our customers coming back for more. 
              Perfect materials and freshly baked food, delicious Lambda cakes,  
              muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!
            </p>
            <div className="ingredients-section__images">
              <img src="/images/wheat.jpg" alt="wheat"/>
              <img src="/images/curry.jpg" alt="red curry"/>
              <img src="/images/bread.jpg" alt="white bread"/>
            </div>
          </article>       
        </div>

      </div>
    </section>
  )
}

export default ingredients;