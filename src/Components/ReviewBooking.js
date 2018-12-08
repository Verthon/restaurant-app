import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const ReviewBooking = (props) => {

  const query = new URLSearchParams(props.location.search);
  const reservation = {};
  for(let param of query.entries()){
    console.log(param);
    //Transforming data from array ["queryName", "queryValue"]
    //To reservation object in format queryName:queryValue
    reservation[param[0]] = param[1];
  }

  console.log(reservation);
  
  return (

    <Fragment>
      <h1 className="heading p-2">Reservation details</h1>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <p>Thank you for making reservation, you can review your information listed below</p>
          <p>Date is </p>
          <Link className="site-header__btn" to="/book-table">Back to booking</Link>
          <Link className="site-header__btn site-header__btn--reverse" to="/">Back to homepage</Link>
          <Link className="site-header__btn" type="submit" to="/">Confirm reservation</Link>
        </div>
      </div>
    </Fragment> 

  );
}

export default ReviewBooking;