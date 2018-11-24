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
import base from '../../base';

/*
*TODO 
  Update state for 

*/

class Home extends Component {
  constructor(){
    super();
    this.state={
      menu: {
        appetisers:{
          apt1:{
            name: 'Tzatziki',
            price: 3900,
            desc: 'Refreshing traditional cucumber and garlic youghurt dip'
          },
          apt2:{
            name: 'Aubergine salad',
            price: 5990,
            desc: 'Purred eggplant, garlic, green pepper and tomato dip'
          }
        },
        starters:{
          st1:{
            name: 'Haloumi',
            price: 5000,
            desc: 'Refreshing traditional cucumber and garlic youghurt dip.'
          },
          st2:{
            name: 'Spinach Pie',
            price: 3900,
            desc: 'Purred eggplant, garlic, green pepper and tomato dip'
          }
        },
        salads:{
          sal1:{
            name: 'Olive special',
            price: 3990,
            desc: 'Refreshing traditional cucumber and garlic youghurt dip.'
          },
          sal2:{
            name: 'Greek salad',
            price: 5000,
            desc: 'tomato, sliced ​​cucumber, green pepper, sliced red onion, Kalamata olives and of course feta cheese.'
          },
          sal3:{
            name: 'Gusto kale salad',
            price: 6000,
            desc: 'lacinato kale, pecorino, parmesan, olive oil, wine, toasted pine nuts',
          }
        },
        mainDishes:{
          mdish1:{
            name: 'Cornish mackerel',
            price: 8990,
            desc: 'Cornish Mackerel fillet, lemon, pepper, horseradish, gnocchi chestnut mushrooms',
          },
          mdish2:{
            name: 'Roasted Lamb',
            price: 7990,
            desc: 'fresh lamb meat, rosemary, mustard, lemon, garlic, salt, honey'
          },
          mdish3: {
            name: 'Fried Chicken',
            price: 9990,
            desc: 'Delicious fresh roasted chicken'
          },
          mdish4: {
            name: 'Pastitsio',
            price: 6000,
            desc: 'Feta cheese, eggs, macaroni, beef, onions, garlic, tomato puree'
          }
        }
      }
    };
  }

  componentDidMount(){
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
          <HomeMenu appetisers={this.state.appetisers}
          starters={this.state.starters} />
          <Reviews/>
          <Footer/>
      </div>
    )
  }
}

export default Home;