import React, { useState, useMemo, useReducer, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { DataContext } from './DataContext'
import { UserContext } from './UserContext'
import { bookingReducer } from '../reducers/booking'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import BookTable from '../pages/BookTable'
import NotFound from '../pages/NotFound'
import ReviewBooking from '../pages/ReviewBooking'
import Admin from '../pages/Admin'
import Login from '../pages/Login'
import { getCollection, getOfflineData, getData } from '../utils/database'
import * as ROUTES from '../constants/routes'

const Router = () => {
  const initialState = {
    booking: {
      date: new Date(),
      people: 1,
      name: 'John Doe',
      email: 'johndoe@xx.ox',
      confirmed: false,
      send: false
    },
    company: {}
  }
  const [state, dispatch] = useReducer(bookingReducer, initialState)
  const [isLoading, setIsLoading] = useState(true)
  const [fromCache, handleCache] = useState(false)
  const [user, setUser] = useState(null)
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser])
  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  useEffect(() => {
    const fetchData = async () => {
      try {
        getOfflineData('company', (snapshot) => {
          snapshot.metadata.fromCache ? handleCache(true) : handleCache(false)
        })
        getCollection('company').then((snapshot) => {
          const data = getData(snapshot)
          const [dataObj] = data
          initialState.company = dataObj
          setIsLoading(false)
        })
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [fromCache, isLoading])

  return (
    <BrowserRouter>
      <DataContext.Provider value={contextValue}>
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
  )
}

export default Router
