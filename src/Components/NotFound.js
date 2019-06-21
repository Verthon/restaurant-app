import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <h1>404 not found in database</h1>
      <Link to="/">Homepage</Link>
    </Fragment>
  );
};

export default NotFound;
