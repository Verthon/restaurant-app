import React, {
  useState,
  useMemo,
  useReducer,
  useEffect,
  Suspense,
  lazy
} from 'react'
import '../scss/index.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { DataContext } from './DataContext'
import { UserContext } from './UserContext'
import { reducer, ADD_COMPANY } from '../reducer'
import Spinner from '../components/Spinner'
import { getCollection, getOfflineData, getData } from '../utils/database'
import { notifyError } from '../utils/notification'
import { DB_ERROR_MSG } from '../constants/toastMessages'
import * as ROUTES from '../constants/routes'
const Home = lazy(() => import('../pages/Home'))
const BookTable = lazy(() => import('../pages/BookTable'))
const Menu = lazy(() => import('../pages/Menu/Menu'))
const Login = lazy(() => import('../pages/Login/Login'))
const Admin = lazy(() => import('../pages/Admin'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))
const ReviewBooking = lazy(() => import('../pages/ReviewBooking'))

const Router = () => {
  const initialState = {
    booking: {
      date: new Date(),
      guests: 1,
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
        getOfflineData('company', snapshot => {
          snapshot.metadata.fromCache
            ? handleCache(!fromCache)
            : handleCache(fromCache)
        })
        getCollection('company').then(snapshot => {
          const data = getData(snapshot)
          const [dataObj] = data
          initialState.company = dataObj
          dispatch({ type: ADD_COMPANY, company: dataObj })
          setIsLoading(!isLoading)
        })
      } catch (err) {
        return notifyError(DB_ERROR_MSG)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Suspense fallback={<Spinner/>}>
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
    </Suspense>
  )
}

export default Router
