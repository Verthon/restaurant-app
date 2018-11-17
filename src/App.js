import React, { Component } from 'react';
import './App.scss';
import Home from './Components/Home/Home';

const context = React.createContext();


class App extends Component {
  constructor () {
    super();
    this.state = {
      
    };
  }
  render() {
    return (
      <Home/>
    );
  }
}

export default App;
