export const SEND_BOOKING_INFO = 'SEND_BOOKING_INFO';

export const sendBookingInfo = booking => ({
  type: SEND_BOOKING_INFO,
  payload: booking,
});
