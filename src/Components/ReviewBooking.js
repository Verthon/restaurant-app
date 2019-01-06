import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
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
      <Link to="/"><h1 className="heading heading__review-booking">{contactInfo.name}</h1></Link>
      <article className="review-booking">
        <p className="review-booking__address">{street} {number}</p>
        <p className="review-booking__address">{city}, {province}, {code} </p>
        <p className="review-booking__name"><span>{reservation.name}</span> reservation</p>
        <p>{reservation.people}</p>
        <p>Guests</p>
        <p>Full reservation date: {reservation.date}</p>
        <Link to="/book-table"><button className="site-header__btn site-header__btn--reverse">Back to booking</button></Link>
        <Link type="submit" to="/"><button className="site-header__btn">Confirm Reservation</button></Link>
      </article>
    </Fragment> 

  );
}

ReviewBooking.PropTypes = {
  location: propTypes.string
}

export default ReviewBooking;