import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { formatDate } from '../helpers';
import 'react-datepicker/dist/react-datepicker.css';
import contactInfo from '../contactInfo';

class BookTable extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleGuests = this.handleGuests.bind(this);
    this.handleName = this.handleName.bind(this);
    this.state = {
      min: new Date(),
      max: new Date(),
      booking: {
        date: new Date(),
        people: 1,
        name: 'John Doe',
        email: '',
      },
    };
  }

  handleDate(e) {
    const booking = { ...this.state.booking };
    booking.date = e;
    this.setState({ booking });
  }

  handleGuests(e) {
    const booking = { ...this.state.booking };
    booking.people = e.target.value;
    this.setState({ booking });
  }

  handleName(e) {
    const booking = { ...this.state.booking };
    booking.name = e.target.value;
    this.setState({ booking });
  }

  handleEmail(e) {
    const booking = { ...this.state.booking };
    booking.email = e.target.value;
    this.setState({ booking });
  }

  handleSubmit(e) {
    //Destructing this.state.booking...

    const { people, name, date, email } = this.state.booking;

    e.preventDefault();
    this.props.history.push({
      pathname: '/review-booking',
      search:
        '?' +
        encodeURIComponent('date') +
        '=' +
        encodeURIComponent(formatDate(date)) +
        '&' +
        encodeURIComponent('people') +
        '=' +
        encodeURIComponent(people) +
        '&' +
        encodeURIComponent('name') +
        '=' +
        encodeURIComponent(name) +
        '&' +
        encodeURIComponent('email') +
        '=' +
        encodeURIComponent(email),
    });
  }

  render() {
    // Destructing contact info object
    const { location, hours } = contactInfo.info;

    return (
      <Fragment>
        <div className="table-booking">
          <Link to="/">
            <h1 className="heading table-booking__title">{contactInfo.name}</h1>
          </Link>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h2 className="table-booking__subtitle">Make a reservation</h2>
              <form onSubmit={this.handleSubmit} className="form-group mt-5">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  className="table-booking__input"
                  type="text"
                  required
                  name="name"
                  onChange={this.handleName}
                  placeholder="Name"
                />
                <label htmlFor="email" className="label"></label>
                <input
                  className="table-booking__input"
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                />
                <label className="label" htmlFor="Datepicker">
                  Please add date
                </label>
                <DatePicker
                  name="Datepicker"
                  className="table-booking__input"
                  selected={this.state.booking.date}
                  onChange={this.handleDate}
                  showTimeSelect
                  timeFormat="HH"
                  timeIntervals={60}
                  minTime={this.state.min.setHours(11)}
                  maxTime={this.state.max.setHours(22)}
                  dateFormat="MMMM dd, yyyy h aa"
                  timeCaption="Time"
                  placeholderText="Click and choose the date"
                />
                <label className="label" htmlFor="people">
                  Number of guests
                </label>
                <input
                  className="table-booking__input"
                  name="people"
                  type="number"
                  required
                  placeholder="Number of guests"
                  min="1"
                  max="8"
                  onChange={this.handleGuests}
                />
                <label>
                  Table is kept for 15 minutes after reservation time. We
                  appreciate you being on time.
                </label>
                <button className="site-header__btn" type="submit">
                  Next step
                </button>
              </form>
            </div>
            <article className="col-md-6 col-sm-12">
              <h2 className="table-booking__subtitle">Located in London</h2>
              <p>
                {location.street} {location.number}
              </p>
              <p>
                {location.city}, {location.province}, {location.code}
              </p>
              <p>{location.phone}</p>

              <h2 className="table-booking__subtitle">Hours of operation</h2>
              <p>{hours.week.name}</p>
              <p>{hours.week.time}</p>
              <p>{hours.weekend.name}</p>
              <p>{hours.weekend.time}</p>
            </article>
          </div>
          <footer className="table-booking_footer mx-auto"></footer>
        </div>
      </Fragment>
    );
  }
}

export default BookTable;
