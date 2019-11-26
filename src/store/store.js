/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../reducers'
import { loadLocalStorageState } from '../helpers'
import thunk from 'redux-thunk'

const persistedState = loadLocalStorageState('booking')

export const store = createStore(
  reducers,
  persistedState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
