import React, {Fragment} from 'react';
import DatePicker from "react-datepicker";
import {formatDate} from '../helpers'
import Navbar from './Navbar';
import "react-datepicker/dist/react-datepicker.css";

class BookTable extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSits = this.handleSits.bind(this);
    this.state = {
      min: new Date().getHours,
      max: '8',
      date: new Date(),
      sits: 1,
    }

  }

  handleDate(e){
    this.setState({
      date: e
    });
  }

  handleSits(e){
    this.setState({
      sits: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: '/review-booking',
      search: '?' + encodeURIComponent('date') + '=' + encodeURIComponent(this.state.date) +
      '&' + encodeURIComponent('sits') + '=' + encodeURIComponent(this.state.sits)
    });
  }

  render() {

    return (
      <Fragment>
        <Navbar/>
        <div className="row container-fluid">
          <div className="col-md-1"></div>
          <div className="col-md-10 col-sm-12">
            <div className="table-booking">

            <h1 className="heading mb-5">Please choose time for reservation</h1>
            <form onSubmit={this.handleSubmit} className="form-group mt-5">
              <DatePicker
                className="form-control mx-auto form-control-lg p-3"
                selected={this.state.date}
                onChange={this.handleDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
                placeholderText="Click and choose the date"
              />
              <br/>
              <label htmlFor="sits">Number of sits(1 - 8)</label>
              <br/>
              <input name="sits" type="number" placeholder="Number of sits" min="1" max="8" onChange={this.handleSits}/>
              <p>How many sits?</p>
              <button className="site-header__btn" type="submit">Review</button>
            </form>
            <footer className="table-booking_footer mx-auto">
              <p>NEXT STEP</p>
              <p>Date {formatDate(this.state.date)}</p>
              <p>sits: {this.state.sits}</p>
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