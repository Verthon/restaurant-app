import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import contactInfo from '../contactInfo';
import { splitDate, splitTime, formatDate } from '../helpers';
import * as emailjs from 'emailjs-com';
import Modal from './Modal';
import { connect } from 'react-redux';

class ReviewBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: false,
      show: false,
      location: {},
      hours: {},
      booking: {},
    };
  }

  render() {
    console.log(this.props);
    const { street, number, code, city, province } = contactInfo.info.location;
    const { name, people, date } = this.props.booking;

    const showModal = () => {
      this.setState({ show: true });
    };

    return (
      <Fragment>
        <Modal show={this.state.show} />
        <Link to="/">
          <h1 className="heading review-booking__title">{contactInfo.name}</h1>
        </Link>
        <article className="review-booking">
          <p className="review-booking__address">
            {street} {number}
          </p>
          <p className="review-booking__address">
            {city}, {province}, {code}{' '}
          </p>
          <p className="review-booking__name">
            <span>{name}</span> reservation
          </p>
          <div className="row">
            <div className="col-sm-4">
              <p className="review-booking__value">{people}</p>
              <p className="review-booking__description">Guests</p>
            </div>
            <div className="col-sm-4">
              <p className="review-booking__value">
                {splitDate(formatDate(date))}
              </p>
              <p className="review-booking__description">Date</p>
            </div>
            <div className="col-sm-4">
              <p className="review-booking__value">
                {splitTime(formatDate(date))}
              </p>
              <p className="review-booking__description">Time</p>
            </div>
          </div>
          <footer className="review-booking__footer">
            <Link to="/book-table">
              <button className="site-header__btn site-header__btn--reverse">
                Back to booking
              </button>
            </Link>
            <button className="site-header__btn" onClick={showModal}>
              Confirm Reservation
            </button>
          </footer>
        </article>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { booking: state.booking };
};

ReviewBooking.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string,
    search: propTypes.string,
  }),
};

export default connect(mapStateToProps)(ReviewBooking);
