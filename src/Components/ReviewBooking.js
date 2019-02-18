import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import contactInfo from '../contactInfo';
import { splitDate, splitTime } from '../helpers';
import * as emailjs from 'emailjs-com';
import Modal from './Modal';


class ReviewBooking extends Component{
  constructor(props){
    super(props);
    this.state = {
      confirmed: false,
      show: false
    };
  }

    render(){
      const query = new URLSearchParams(this.props.location.search);
      const { street, number, code, city, province } = contactInfo.info.location;
      const userId = 'user_mLoNx7WniBmdKd2zpNZmF';

      const reservation = {};
      for (let param of query.entries()) {
        //Transforming data from array ["queryName", "queryValue"]
        // - to reservation object in format queryName:queryValue
        reservation[param[0]] = param[1];
        console.log(param);
      }

      const templateParams = {
        name: reservation.name,
        email: reservation.email,
      };

      const sendEmail = () => {
        emailjs.send(userId, 'reservation', templateParams );
      }

      const showModal = () => {
        console.log('Close from modal component');
        this.setState({show: true});
      }

      return (

        <Fragment>
          <Modal show={this.state.show}/>
          <Link to="/"><h1 className="heading review-booking__title">{contactInfo.name}</h1></Link>
          <article className="review-booking">
            <p className="review-booking__address">{street} {number}</p>
            <p className="review-booking__address">{city}, {province}, {code} </p>
            <p className="review-booking__name"><span>{reservation.name}</span> reservation</p>
            <div className="row">
              <div className="col-sm-4">
                <p className="review-booking__value">{reservation.people}</p>
                <p className="review-booking__description">Guests</p>
              </div>
              <div className="col-sm-4">
                <p className="review-booking__value">{splitDate(reservation.date)}</p>
                <p className="review-booking__description">Date</p>
              </div>
              <div className="col-sm-4">
                <p className="review-booking__value">{splitTime(reservation.date)}</p>
                <p className="review-booking__description">Time</p>
              </div>
            </div>
            <footer className="review-booking__footer">
              <Link to="/book-table"><button className="site-header__btn site-header__btn--reverse">Back to booking</button></Link>
              <button className="site-header__btn" onClick={showModal}>Confirm Reservation</button>
            </footer>
          </article>
        </Fragment>
    
      );
    }
  }

ReviewBooking.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string,
    search: propTypes.string
  })
}

export default ReviewBooking;