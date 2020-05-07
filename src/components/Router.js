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
import * as ROUTES from '../constants/routes'

const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.BOOK_TABLE} component={BookTable} />
        <Route path={ROUTES.REVIEW_BOOKING} component={ReviewBooking} />
        <Route path={ROUTES.MENU} component={Menu} />
        <UserContext.Provider value='ys'>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.ADMIN} component={Admin} />
        </UserContext.Provider>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default Router
