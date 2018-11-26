import React , {Component} from 'react';
import Header from '../Header/Header';
import HomeNavbar from '../HomeNavbar';
import NavItem from '../NavItem/NavItem';
import HeaderContent from '../HeaderContent/HeaderContent';
import About from '../About/About';
import Ingredients from '../Ingredients/Ingredients';
import HomeMenu from '../HomeMenu';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';
import '../../App.scss';
import menu from '../../menu';
import base from '../../base';

/*
*TODO 
  Update state for 

*/

class Home extends Component {
  constructor(){
    super();
    this.state={
      menu: {}
    };
  }

  componentDidMount(){
    this.setState({
      menu: menu
    });
    this.ref = base.syncState
  }

  render(){
    return(
      <div>
        <Header>
            <HomeNavbar>
              <NavItem></NavItem>
            </HomeNavbar>
            <HeaderContent/>
          </Header>
          <About/>
          <Ingredients/>
          <HomeMenu menu={this.state.menu} />
          <Reviews/>
          <Footer/>
      </div>
    )
  }
}

export default Home;