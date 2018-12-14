import React, {Fragment} from 'react';
import Navbar from "./Navbar";
import DatePicker from "react-datepicker";
import {formatDate} from '../helpers';
import "react-datepicker/dist/react-datepicker.css";

class BookTable extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handlePeople = this.handlePeople.bind(this);
    this.state = {
      min: new Date().getHours,
      max: '8',
      date: new Date(),
      people: 1,
    }

  }

  handleDate(e){
    this.setState({
      date: e
    });
  }

  handlePeople(e){
    this.setState({
      people: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: '/review-booking',
      search: '?' + encodeURIComponent('date') + '=' + encodeURIComponent(formatDate(this.state.date)) +
      '&' + encodeURIComponent('people') + '=' + encodeURIComponent(this.state.people)
    });
  }

  render() {

    return (
      <Fragment>
            <Navbar/>
            <div className="table-booking">

            <h1 className="heading table-booking__title">Please choose time for reservation</h1>
            <form onSubmit={this.handleSubmit} className="form-group mt-5">
              <label className="label" for="Datepicker">Please add date</label>
              <DatePicker
                name="Datepicker"
                className="form-control mx-auto form-control-lg p-3"
                selected={this.state.date}
                onChange={this.handleDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                minTime={new Date().setHours(new Date().setMinutes(new Date(), 0), 17)}
                
                dateFormat="MMMM dd, yyyy h:mm aa"
                timeCaption="Time"
                placeholderText="Click and choose the date"
              />
              <label className="label" htmlFor="people">Number of people</label>
              <input name="people" type="number" placeholder="Number of people" min="1" max="8" onChange={this.handlePeople}/>
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