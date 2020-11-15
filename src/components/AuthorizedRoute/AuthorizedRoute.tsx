import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { AuthorizedRouteProps } from './Authorized.types'
import * as ROUTES from '../../constants/routes'

export const AuthorizedRoute = (props: AuthorizedRouteProps) => {
  const { user } = useAuth0()
  if (user) {
    return <Route {...props} />
  }

  return <Redirect to={ROUTES.LOGIN} />
}
