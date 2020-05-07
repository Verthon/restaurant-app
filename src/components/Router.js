import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import { UserContext } from './UserContext'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import BookTable from '../pages/BookTable'
import NotFound from '../pages/NotFound'
import ReviewBooking from '../pages/ReviewBooking'
import Admin from '../pages/Admin'
import Login from '../pages/Login'
import { store } from '../store/store'

const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/book-table' component={BookTable} />
        <Route path='/review-booking' component={ReviewBooking} />
        <Route path='/menu' component={Menu} />
        <UserContext.Provider value='ys'>
          <Route path='/login' component={Login} />
          <Route path='/admin' component={Admin} />
        </UserContext.Provider>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default Router
