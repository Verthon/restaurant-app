import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import BookTable from './BookTable';
import NotFound from './NotFound';
import ReviewBooking from './ReviewBooking';
import { store } from "../store/store";
import { Provider } from "react-redux";

const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/book-table" component={BookTable} />
        <Route path="/review-booking" component={ReviewBooking} />
        <Route path="/menu" component={Menu} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
  
);

export default Router;
