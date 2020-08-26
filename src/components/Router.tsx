import React, { useState, useMemo, Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { UserContext } from './UserContext'
import { Spinner } from '../ui/Spinner/Spinner'
import '../scss/index.scss'
import * as ROUTES from '../constants/routes'
const Home = lazy(() => import('../pages/Home'))
const BookTable = lazy(() => import('../pages/BookTable'))
const Menu = lazy(() => import('../pages/Menu/Menu'))
const Login = lazy(() => import('../pages/Login/LoginContainer'))
const Admin = lazy(() => import('../pages/Admin'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound').then(module => ({ default: module.NotFound})))
const ReviewBooking = lazy(() => import('../pages/ReviewBooking'))

const Router = () => {
  const [user, setUser] = useState(null)
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser])
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <UserContext.Provider value={userValue}>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.BOOK_TABLE} component={BookTable} />
            <Route path={ROUTES.REVIEW_BOOKING} component={ReviewBooking} />
            <Route path={ROUTES.MENU} component={Menu} />
            <Route path={ROUTES.LOGIN}>
            <Login key={ROUTES.LOGIN} />
            </Route>
            <Route path={ROUTES.ADMIN} component={Admin} />
            <Route component={NotFound} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </Suspense>
  )
}

export default Router
