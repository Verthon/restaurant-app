import React , {Component, Fragment} from 'react';
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
import base from '../../base';
import contactInfo from '../../contactInfo';

const {hours, location} = contactInfo.info;

class Home extends Component {
  constructor(){
    super();
    this.state={
      menu: {}
    };
  }

  componentDidMount(){
    this.ref = base.syncState
  }

  render(){
    return(
      <Fragment>
        <Header>
            <HomeNavbar>
              <NavItem></NavItem>
            </HomeNavbar>
            <HeaderContent/>
          </Header>
          <About/>
          <Ingredients/>
          <HomeMenu/>
          <Reviews/>
          <Footer hours={hours} location={location}/>
      </Fragment>
    )
  }
}

export default Home;