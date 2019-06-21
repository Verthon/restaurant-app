import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import BookTable from './BookTable';
import NotFound from './NotFound';
import ReviewBooking from './ReviewBooking';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/book-table" component={BookTable} />
      <Route path="/review-booking" component={ReviewBooking} />
      <Route path="/menu" component={Menu} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
