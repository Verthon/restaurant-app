/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux'
import reducers from '../reducers'
import { loadLocalStorageState } from '../helpers'

const persistedState = loadLocalStorageState('booking')

export const store = createStore(
  reducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
