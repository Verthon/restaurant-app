import { SEND_BOOKING_INFO } from '../actions';

const initialState = {
  date: new Date(),
  people: 1,
  name: 'John Doe',
  email: 'johndoe@xx.ox',
};

export const booking = (state = initialState, action) => {
  switch (action.type) {
    case SEND_BOOKING_INFO:
      return Object.assign({}, state, {
        ...action.payload,
      });
    default:
      return state;
  }
};
