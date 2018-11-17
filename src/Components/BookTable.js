import React from 'react';
const booktable = () => {
  return (
    <div className="table-booking">

      <h1>Please choose time for reservation</h1>
      <div className="table-booking__container">
        <h2 className="table-booking__title">Lunch</h2>
        <div className="table-booking__hours">
          <button className="table-booking__btn">12:00 PM</button>
          <button className="table-booking__btn">12:30 PM</button>
          <button className="table-booking__btn">13:00 PM</button>
        </div>
      </div>

      <div className="table-booking__container">
        <h2 className="table-booking__title">Dinner</h2>
        <div className="table-booking__hours">
          <button className="table-booking__btn">14:00 PM</button>
          <button className="table-booking__btn">14:30 PM</button>
          <button className="table-booking__btn">15:00 PM</button>
          <button className="table-booking__btn">15:30 PM</button>
          <button className="table-booking__btn">16:00 PM</button>         
        </div>
      </div>
      <footer className="table-booking_footer">
        <p>NEXT STEP</p>
        <p>Review Booking</p>
        <button>arrow</button>
      </footer>
    </div>
  );
}

export default booktable;