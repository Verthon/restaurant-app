import * as actionTypes from './actions';

const initialState = {
  min: '12',
  max: '8',
  date: new Date(),
  sits: 1
}

const reducer = (state = initialState, action) => {
  return state;
}

export default reducer;