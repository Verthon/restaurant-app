import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import DatePicker from "react-datepicker";
import ReviewBooking from './ReviewBooking';
import "react-datepicker/dist/react-datepicker.css";

class BookTable extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      date: new Date(),
    }

  }

  handleChange(e){
    this.setState({
      date: e
    });
    console.log(this.state.date);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
    <BrowserRouter>
      <Switch>
        <Route path="/review-booking" component={ReviewBooking}/>
        <div className="row container-fluid">
          <div className="col-md-1"></div>
          <div className="col-md-10 col-sm-12">
            <div className="table-booking">

            <h1 className="heading mb-5">Please choose time for reservation</h1>
            <form onSubmit={this.handleSubmit} className="form-group mt-5">
              <DatePicker
                className="form-control mx-auto form-control-lg p-3"
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
      </Switch>
    </BrowserRouter> 
    );
  }

}

export default BookTable;