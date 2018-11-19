import React from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class BookTable extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selected: '',
      time: '',
      date: '',
    }

  }

  handleChange(e){
    this.setState({
      date: e
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="table-booking">

        <h1>Please choose time for reservation</h1>
        <form onSubmit={this.handleSubmit}>
          <DatePicker
            selected={this.state.date}
            onChange={this.handleChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
          />
        </form>
        <footer className="table-booking_footer">
          <p>NEXT STEP</p>
          <p>Review Booking</p>
          <Link to="/review-booking"><button type="submit">arrow</button></Link>
        </footer>
      </div>
    );
  }

}

export default BookTable;