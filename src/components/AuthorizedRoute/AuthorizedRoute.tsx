import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthorizedRouteProps } from './Authorized.types';
import { useAuthState } from '../../hooks/useAuthState/useAuthState';

export const AuthorizedRoute = (props: AuthorizedRouteProps) => {
  const { isAuthorized } = useAuthState();

  if (isAuthorized) {
    return <Route {...props} />;
  }

  return <Redirect to="/login" />;
};