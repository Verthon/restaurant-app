import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import {formatDate} from '../helpers';
import "react-datepicker/dist/react-datepicker.css";
import contactInfo from '../contactInfo';

class BookTable extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleGuests = this.handleGuests.bind(this);
    this.handleName = this.handleName.bind(this);
    this.state = {
      min: new Date().getHours,
      max: new Date(),
      booking: {
        date: new Date(),
        people: 1,
        name: 'John Doe',
      },
    }

  }

  handleDate(e){
    const booking = {...this.state.booking}
    booking.date = e;
    this.setState({booking});
  }

  handleGuests(e){
    const booking = {...this.state.booking}
    booking.people = e.target.value;
    this.setState({booking});
  }

  handleName(e){
    const booking = {...this.state.booking}
    booking.name = e.target.value;
    this.setState({booking});
  }

  handleSubmit(e) {

    //Destructing this.state.booking...

    const {people, name, date} = this.state.booking;

    e.preventDefault();
    this.props.history.push({
      pathname: '/review-booking',
      search: '?' + encodeURIComponent('date') + '=' + encodeURIComponent(formatDate(date)) +
      '&' + encodeURIComponent('people') + '=' + encodeURIComponent(people)
      + '&' +encodeURIComponent('name') + '=' + encodeURIComponent(name)
    });
  }

  render() {
    // Destructing contact info object
    const {location, hours} = contactInfo.info;

    return (
      <Fragment>
            <div className="table-booking">

            <Link to="/"><h1 className="heading table-booking__title">{contactInfo.name}</h1></Link>
            <form onSubmit={this.handleSubmit} className="form-group mt-5">
              <label htmlFor="name">Name</label>
              <input className="form-control" type="text" 
              name="name" onChange={this.handleName}/>
              <label className="label" htmlFor="Datepicker">Please add date</label>
              <DatePicker
                name="Datepicker"
                className="form-control mx-auto form-control-lg p-3"
                selected={this.state.booking.date}
                onChange={this.handleDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}               
                dateFormat="MMMM dd, yyyy h:mm aa"
                timeCaption="Time"
                placeholderText="Click and choose the date"
              />
              <label className="label" htmlFor="people">Number of guests</label>
              <input name="people" type="number" placeholder="Number of people" min="1" max="8" onChange={this.handleGuests}/>
              <label>Table is kept for 15 minutes after reservation time. We appreciate you being on time.</label>
              <button className="table-booking__btn" type="submit">Next</button>
            </form>
            <footer className="table-booking_footer mx-auto">
            </footer>
          </div>
      </Fragment>  
    );
  }

}

export default BookTable;