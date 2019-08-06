/* eslint-disable react/no-unused-state */
import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import contactInfo from '../contactInfo';
import { splitDate, splitTime, formatDate } from '../helpers';
import Modal from './Modal';
import about from '../images/brooke-lark-about.jpg';

class ReviewBooking extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, booking: {} };
  }

  render() {
    console.log(this.props);
    const { street, number, code, city, province } = contactInfo.info.location;
    const { name, people, date } = this.props;
    const { show } = this.state;

    const showModal = () => {
      this.setState({ show: true });
    };

    return (
      <Fragment>
        <Modal show={show} />
        <h1 className="heading review-booking__title">
          <Link to="/">{contactInfo.name}</Link>
        </h1>
        <article className="review-booking">
          <img src={about} alt="" />
          <p className="review-booking__client">
            <strong className="review-booking__name">{name}</strong> reservation
          </p>
          <div className="row review-booking__container">
            <div className="section__col section__col--flexible">
              <p className="review-booking__value">{people}</p>
              <p className="review-booking__description">Guests</p>
            </div>
            <div className="section__col section__col--flexible">
              <p className="review-booking__value">
                {splitDate(formatDate(date))}
              </p>
              <p className="review-booking__description">Date</p>
            </div>
            <div className="section__col section__col--flexible">
              <p className="review-booking__value">
                {splitTime(formatDate(date))}
              </p>
              <p className="review-booking__description">Time</p>
            </div>
          </div>
          <p className="review-booking__address">
            {street} {number}
          </p>
          <p className="review-booking__address">
            {city}, {province}, {code}{' '}
          </p>
          <footer className="review-booking__footer">
            <button className="btn btn--light" type="button">
              <Link to="/book-table">Edit booking</Link>
            </button>

            <button className="btn btn--dark" onClick={showModal} type="button">
              Confirm Booking
            </button>
          </footer>
        </article>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { booking } = state;
  return booking;
};

ReviewBooking.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string,
    search: propTypes.string,
  }),
  name: propTypes.string,
  people: propTypes.string,
  date: propTypes.string,
};

ReviewBooking.defaultProps = {
  location: propTypes.shape({
    pathname: propTypes.string,
    search: propTypes.string,
  }),
  name: propTypes.string,
  people: propTypes.string,
  date: propTypes.string,
};

export default connect(mapStateToProps)(ReviewBooking);
