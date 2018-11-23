import React, { Fragment } from 'react';
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
    <Fragment> 
      <div className="row container-fluid">
        <div className="col-md-1"></div>
        <div className="col-md-10 col-sm-12">
          <div className="table-booking">

          <h1 className="heading mb-5">Please choose time for reservation</h1>
          <form onSubmit={this.handleSubmit} className="form-group mt-5">
            <DatePicker
              className="form-control mx-auto form-control-lg"
              selected={this.state.date}
              onChange={this.handleChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
              placeholderText="Click and choose the date"
            />
          </form>
          <footer className="table-booking_footer mx-auto">
            <p>NEXT STEP</p>
            <p>Review Booking</p>
            <Link to="/review-booking"><button className="site-header__btn" type="submit">Review Booking</button></Link>
          </footer>
        </div>
        </div>
        <div className="col-md-1"></div>  
      </div>
      <div className="row">
        
      </div>
    </Fragment> 
    );
  }

}

export default BookTable;