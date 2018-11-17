import React from 'react';
import BookingContainer from './BookingContainer';

class BookTable extends React.Component {
  constructor(){
    super();
    this.state={
      titles: [
        'Lunch',
        'Dinner'
      ],
      lunchHours: [
        '12:00 PM',
        '12:30 PM',
        '13:00 PM',
      ],
      dinnerHours: [
        '14:00 PM',
        '15:00 PM',
        '16:00 PM'
      ]
    }
  }
  render(){
    return (
      <div className="table-booking">
  
        <h1>Please choose time for reservation</h1>
        <BookingContainer title="Lunch" hours={this.state.lunchHours}/>
        <BookingContainer title="Dinner" hours={this.state.dinnerHours}/>

        <footer className="table-booking_footer">
          <p>NEXT STEP</p>
          <p>Review Booking</p>
          <a href="/review-booking"><button>arrow</button></a>
        </footer>
      </div>
    );
  }
  
}

export default BookTable;