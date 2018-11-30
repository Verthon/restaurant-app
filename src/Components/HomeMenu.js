import React from 'react';

const HomeMenu = () => {
  return(
    <div className="row p-5">
      <div className="col-md-6">
        <img class="img-fluid" src="/images/reviews.jpg" alt="example dish from our restaurant"></img>
      </div>
      <div className="col-md-6">
        <h2 className="heading">Discover our menu!</h2>
        <p>For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates. We love food, lots of different food, just like you. </p>
        <div className="col-md-12 text-center">
          <a href="/menu"><button class="site-header__btn m-5">see the menu</button></a>
        </div>
      </div>
    </div>
  )
}

export default HomeMenu;