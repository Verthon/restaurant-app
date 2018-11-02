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
        <Header>
          <Navbar>
            <NavItem></NavItem>
          </Navbar>
          <HeaderContent></HeaderContent>
        </Header>
        <About/>
        <Ingredients/>
        <Menu/>
        <Reviews/>
        <Footer/>
      </div>
    );
  }
}

export default App;
