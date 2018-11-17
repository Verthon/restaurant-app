import React from 'react';

const BookingContainer = (props) => {
  const buttons = props.hours.map((hour, key) => {
    return(<button className="table-booking__btn" key={key}>{hour}</button>)
  });
  return (
      <div className="table-booking__container">
        <h2 className="table-booking__title">{props.title}</h2>
        <div className="table-booking__hours">
        {buttons}
        </div>
      </div>   
  );
}

export default BookingContainer;