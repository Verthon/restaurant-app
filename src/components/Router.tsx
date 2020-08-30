import React, { useState, useMemo, Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { UserContext } from './UserContext'
import { motion } from 'framer-motion';
import '../scss/index.scss'
import * as ROUTES from '../constants/routes'
import { pageTransitions } from '../constants/config';
const HomeContainer = lazy(() => import('../pages/Home/HomeContainer').then(module => ({ default: module.HomeContainer})))
const BookTableContainer = lazy(() => import('../pages/BookTable/BookTableContainer').then(module => ({ default: module.BookTableContainer})))
const MenuContainer = lazy(() => import('../pages/Menu/MenuContainer').then(module => ({ default: module.MenuContainer})))
const Login = lazy(() => import('../pages/Login/LoginContainer'))
const AdminContainer = lazy(() => import('../pages/Admin/AdminContainer').then(module => ({ default: module.AdminContainer})))
const NotFound = lazy(() => import('../pages/NotFound/NotFound').then(module => ({ default: module.NotFound})))
const ReviewBookingContainer = lazy(() => import('../pages/ReviewBooking/ReviewBookingContainer').then(module => ({ default: module.ReviewBookingContainer})))

const Router = () => {
  const [user, setUser] = useState(null)
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser])
  return (
    <Suspense fallback={<motion.div variants={pageTransitions}></motion.div>}>
      <BrowserRouter>
        <UserContext.Provider value={userValue}>
          <Switch>
            <Route exact path={ROUTES.HOME} component={HomeContainer} />
            <Route path={ROUTES.BOOK_TABLE} component={BookTableContainer} />
            <Route path={ROUTES.REVIEW_BOOKING} component={ReviewBookingContainer} />
            <Route path={ROUTES.MENU} component={MenuContainer} />
            <Route path={ROUTES.LOGIN}>
            <Login key={ROUTES.LOGIN} />
            </Route>
            <Route path={ROUTES.ADMIN} component={AdminContainer} />
            <Route component={NotFound} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </Suspense>
  )
}

export default Router
