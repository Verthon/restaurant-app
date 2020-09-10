import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthorizedRouteProps } from './Authorized.types';
import { useAuthState } from '../../hooks/useAuthState/useAuthState';
import * as ROUTES from '../../constants/routes'

export const AuthorizedRoute = (props: AuthorizedRouteProps) => {
  const { user } = useAuthState();

  if (user) {
    return <Route {...props} />;
  }

  return <Redirect to={ROUTES.LOGIN} />;
};