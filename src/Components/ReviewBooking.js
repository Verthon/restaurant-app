import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const ReviewBooking = (props) => {
  console.log(props);
  return (
    <Fragment>
      <h1 className="heading p-2">Reservation details</h1>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <p>Thank you for making reservation, you can review your information listed below</p>
          <Link className="site-header__btn" to="/book-table">Back to booking</Link>
          <Link className="site-header__btn site-header__btn--reverse" to="/">Back to homepage</Link>
          <Link className="site-header__btn" type="submit" to="/">Confirm reservation</Link>
        </div>
      </div>

    </Fragment>  
  );
}

export default ReviewBooking;