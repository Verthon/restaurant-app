import React, { useState, useMemo, useReducer, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { DataContext } from './DataContext'
import { UserContext } from './UserContext'
import { reducer, ADD_COMPANY } from '../reducer'
import Home from '../pages/Home'
import Menu from '../pages/Menu/Menu'
import BookTable from '../pages/BookTable'
import NotFound from '../pages/NotFound/NotFound'
import ReviewBooking from '../pages/ReviewBooking'
import Admin from '../pages/Admin'
import Login from '../pages/Login/Login'
import { getCollection, getOfflineData, getData } from '../utils/database'
import { notify } from '../utils/notification'
import { DB_ERROR_MSG } from '../constants/toastMessages'
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
  const [state, dispatch] = useReducer(reducer, initialState)
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
          snapshot.metadata.fromCache
            ? handleCache(!fromCache)
            : handleCache(fromCache)
        })
        getCollection('company').then((snapshot) => {
          const data = getData(snapshot)
          const [dataObj] = data
          initialState.company = dataObj
          dispatch({ type: ADD_COMPANY, company: dataObj })
          setIsLoading(!isLoading)
        })
      } catch (err) {
        return notify(DB_ERROR_MSG)
      }
    }
    fetchData()
  }, [])

  return (
    <BrowserRouter>
      <DataContext.Provider value={contextValue}>
        <UserContext.Provider value={userValue}>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.BOOK_TABLE} component={BookTable} />
            <Route path={ROUTES.REVIEW_BOOKING} component={ReviewBooking} />
            <Route path={ROUTES.MENU} component={Menu} />
            <Route path={ROUTES.LOGIN}>
              <Login key={ROUTES.LOGIN} history={history} />
            </Route>
            <Route path={ROUTES.ADMIN} component={Admin} />
            <Route component={NotFound} />
          </Switch>
        </UserContext.Provider>
      </DataContext.Provider>
    </BrowserRouter>
  )
}

export default Router
