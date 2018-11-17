import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import Home from './Home/Home';
import BookTable from './BookTable';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/book-table" component={BookTable}/>
      <Route component={NotFound} />
    </Switch>

  </BrowserRouter>
);

export default Router;