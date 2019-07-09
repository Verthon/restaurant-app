export const SEND_BOOKING_INFO = "SEND_BOOKING_INFO";

export const sendBookingInfo = (info) => {
  return{
    type: SEND_BOOKING_INFO,
    info
  } 
}