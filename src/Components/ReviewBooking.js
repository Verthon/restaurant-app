import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const ReviewBooking = (props) => {
  console.log(props);
  return (
    <Fragment>
      <h1>Review Booking</h1>
      <Link to="/book-table">Back to booking</Link>
    </Fragment>  
  );
}

export default ReviewBooking;