/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import reducers from '../reducers';

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
