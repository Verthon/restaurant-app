import React from 'react';
import {Link} from 'react-router-dom';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
//import 'rc-time-picker/assets/index.css';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import 'rc-calendar/assets/index.css';

class BookTable extends React.Component {

  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={
      selected: '',
      time: '',
      date: ''
    }

  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return (
      <div className="table-booking">
  
        <h1>Please choose time for reservation</h1>
        <form onSubmit={this.handleSubmit}>
          <Calendar></Calendar>
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