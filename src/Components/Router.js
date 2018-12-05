import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Menu from './Menu';
import BookTable from './BookTable';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/book-table" component={BookTable}/>
      <Route path="/menu" component={Menu}/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;