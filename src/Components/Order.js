import React, {Fragment} from 'react';
import Menu from './Menu';
import Navbar from './Navbar';

const Order = () => {
  return(
    <Fragment>
      <Navbar/>
      <div className="container">
        <h1 className="heading text-center mb-5">Order</h1>
      </div>
    </Fragment>
    
  );
}

export default Order;