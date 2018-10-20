import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import NavItem from './NavItem/NavItem';
import HeaderContent from './HeaderContent/HeaderContent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Navbar>
            <NavItem></NavItem>
          </Navbar>
          <HeaderContent></HeaderContent>
        </Header>
      </div>
    );
  }
}

export default App;
