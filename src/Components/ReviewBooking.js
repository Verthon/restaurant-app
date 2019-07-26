import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import contactInfo from '../contactInfo';
import { splitDate, splitTime, formatDate } from '../helpers';
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
          <p className="review-booking__client">
            <strong className="review-booking__name">{name}</strong> reservation
          </p>
          <div className="row">
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
            <div className="section__col">
              <p className="review-booking__value section__col--flexible">
                {splitTime(formatDate(date))}
              </p>
              <p className="review-booking__description">Time</p>
            </div>
          </div>
          <footer className="review-booking__footer">
            
              <button className="btn btn--light">
              <Link to="/book-table">
                Edit booking
                </Link>
              </button>
            
            <button className="btn btn--dark" onClick={showModal}>
              Confirm Booking
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
