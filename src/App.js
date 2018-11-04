import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import NavItem from './NavItem/NavItem';
import HeaderContent from './HeaderContent/HeaderContent';
import About from './About/About';
import Ingredients from './Ingredients/Ingredients';
import Menu from './Menu/Menu';
import Reviews from './Reviews/Reviews';
import Footer from './Footer/Footer';
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
      <div className="App">
        <BrowserRouter>
          <Header>
            <Navbar>
              <NavItem></NavItem>
            </Navbar>
            <Route path='/book-table'/>
            <HeaderContent></HeaderContent>
          </Header>
          <About/>
          <Ingredients/>
          <Menu/>
          <Reviews/>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
