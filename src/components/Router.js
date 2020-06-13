import React, {
  useState,
  useMemo,
  Suspense,
  lazy
} from 'react'
import '../scss/index.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { DataContext } from './DataContext'
import { UserContext } from './UserContext'
// import { reducer, ADD_COMPANY } from '../reducer'
import Spinner from '../components/Spinner'
import * as ROUTES from '../constants/routes'
// import { useGetCollection } from '../hooks/useGetCollection'
const Home = lazy(() => import('../pages/Home'))
const BookTable = lazy(() => import('../pages/BookTable'))
const Menu = lazy(() => import('../pages/Menu/Menu'))
const Login = lazy(() => import('../pages/Login/Login'))
const Admin = lazy(() => import('../pages/Admin'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))
const ReviewBooking = lazy(() => import('../pages/ReviewBooking'))

const Router = () => {
  // const initialState = {
  //   booking: {
  //     date: new Date(),
  //     guests: 1,
  //     name: 'John Doe',
  //     email: 'johndoe@xx.ox',
  //     confirmed: false,
  //     send: false
  //   },
  //   company: {}
  // }
  // const { data, isLoading } = useGetCollection({ collectionName: 'company' })
  // const [companyData, setCompanyData] = useState(initialState)
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [user, setUser] = useState(null)
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser])
  // const contextValue = useMemo(() => {
  //   return { state, dispatch }
  // }, [state, dispatch])

  // useEffect(() => {
  //   const controller = new AbortController()
  //   console.log('data', data[0].data)
  //   if (data.length > 0) {
  //     console.log('data aftercheck', data[0].data)
  //     setCompanyData(data[0].data)
  //     // initialState.company = dataObj
  //     dispatch({ type: ADD_COMPANY, company: companyData })
  //   }
  //   return () => controller.abort()
  // }, [])

  // if (isLoading) {
  //   return <Spinner />
  // }

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
              <Login key={ROUTES.LOGIN} history={history} />
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
