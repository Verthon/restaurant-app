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
import db from '../../base';


class Home extends Component {
  constructor(){
    super();
    this.state={
      location: {},
      hours: false
    };
  }

  componentDidMount(){
    db.collection('location').get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        this.setState({
          location: {...doc.data()}
        })
      })
    });
    db.collection('hours').get().then(snapshot => {
      snapshot.docs.forEach(doc => {
        this.setState({
          hours: {...doc.data()}
        })
      })
    });
  }

  render(){
    return(
      <Fragment>
        <Header>
            <HomeNavbar name={this.state.hours.name}>
              <NavItem></NavItem>
            </HomeNavbar>
            <HeaderContent/>
          </Header>
          <About/>
          <Ingredients/>
          <HomeMenu/>
          <Reviews/>
          {(this.state.hours)? <Footer hours={this.state.hours} location={this.state.location}/> : null }
      </Fragment>
    )
  }
}

export default Home;