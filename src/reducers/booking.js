import {sendBookingInfo, SEND_BOOKING_INFO, } from '../actions';
export const booking = (state = [], action) => {
  switch(action.type){
    case SEND_BOOKING_INFO:
      return Object.assign({}, state, {
        
      })
    default: 
      return state;  
  }
}