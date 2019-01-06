import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import contactInfo from '../contactInfo';


const ReviewBooking = (props) => {
  const query = new URLSearchParams(props.location.search);
  const {street, number, code, city, province} = contactInfo.info.location;
  const reservation = {};
  for(let param of query.entries()){
    //Transforming data from array ["queryName", "queryValue"]
    // - to reservation object in format queryName:queryValue
    reservation[param[0]] = param[1];
  }

  
  return (

    <Fragment>
      <h1 className="heading p-2">{contactInfo.name}</h1>
      <article className="review-booking">
        <p>{reservation.name}</p>
        <p>{street} {number}</p>
        <p>{city}, {province}, {code} </p>
          <p>Thank you for making reservation, you can review your information listed below</p>
          <p>Full reservation date: {reservation.date}</p>
          <p>For {reservation.people} people</p>
          <Link to="/book-table"><button className="site-header__btn site-header__btn--reverse">Back to booking</button></Link>
          <Link type="submit" to="/"><button className="site-header__btn">Confirm Reservation</button></Link>
      </article>
    </Fragment> 

  );
}

ReviewBooking.PropTypes = {
  location: PropTypes.string
}

export default ReviewBooking;