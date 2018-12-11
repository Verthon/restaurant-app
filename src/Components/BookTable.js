import React, {Fragment} from 'react';
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
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 col-sm-12">
            <div className="table-booking">

            <h1 className="heading table-booking__title">Please choose time for reservation</h1>
            <form onSubmit={this.handleSubmit} className="form-group mt-5">
              <label for="Datepicker">Please add date</label>
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
              <br/>
              <label htmlFor="people">Number of people</label>
              <br/>
              <input name="people" type="number" placeholder="Number of people" min="1" max="8" onChange={this.handlePeople}/>
              <button className="site-header__btn" type="submit">Review</button>
            </form>
            <footer className="table-booking_footer mx-auto">
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