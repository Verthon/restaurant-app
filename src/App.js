import React, { Component } from 'react';
import './App.scss';
import Home from './Components/Home/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import Booktable from './Components/BookTable';
//import Provider from './Provider';

const context = React.createContext();


class App extends Component {
  constructor () {
    super();
    this.state = {
      
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Home/>
          <Route path='/book-table' component={Booktable}/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
