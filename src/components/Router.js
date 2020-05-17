import React, { useState, useMemo, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import { DataContext } from './DataContext'
import { UserContext } from './UserContext'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import BookTable from '../pages/BookTable'
import NotFound from '../pages/NotFound'
import ReviewBooking from '../pages/ReviewBooking'
import Admin from '../pages/Admin'
import Login from '../pages/Login'
import db from '../firebase'
import { getCollection, getOfflineData, getData } from '../utils/database'
import { store } from '../store/store'
import * as ROUTES from '../constants/routes'

const Router = () => {
  const [companyData, setCompanyData] = useState({
    hours: {},
    location: {}
  })
  const [isLoading, setIsLoading] = useState(true)
  const [location, setLocation] = useState({})
  const [hours, setHours] = useState(false)
  const [fromCache, handleCache] = useState(false)
  const [user, setUser] = useState(null)
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser])
  const companyValue = useMemo(() => companyData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        getOfflineData('company', (snapshot) => {
          snapshot.metadata.fromCache ? handleCache(true) : handleCache(false)
        })
        getCollection('company').then((snapshot) => {
          const data = getData(snapshot)
          setCompanyData(data)
          setIsLoading(false)
        })
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
    console.log(fromCache, companyData)
  }, [fromCache, isLoading])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <DataContext.Provider value={companyValue}>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.BOOK_TABLE} component={BookTable} />
            <Route path={ROUTES.REVIEW_BOOKING} component={ReviewBooking} />
            <Route path={ROUTES.MENU} component={Menu} />
            <UserContext.Provider value={userValue}>
              <Route path={ROUTES.LOGIN} component={Login} />
              <Route path={ROUTES.ADMIN} component={Admin} />
            </UserContext.Provider>
            <Route component={NotFound} />
          </Switch>
        </DataContext.Provider>
      </BrowserRouter>
    </Provider>
  )
}

export default Router
