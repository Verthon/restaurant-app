import React, {Fragment, Component} from 'react';
import MenuItem from './MenuItem';
import menu from '../menu';
import Navbar from './Navbar';
import db from '../base';
//TODO restructure menu divs with component

class Menu extends Component {

  constructor(){
    super();
    this.state = {
      appetizers: {},
      desserts: {},
      salads: {},
      maindishes: {}
    }
  }

  componentDidMount(){
    db.collection('menu').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        this.setState({
          appetizers: doc.data().Appetizers,
          desserts: doc.data().Desserts,
        });
      });
    }) ;
  }

  render(){
    const {item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12} = menu;
    console.log(this.state.appetizers.app1);
    console.log(this.state.desserts); //first log undefined, second is good
    return (
      <Fragment>
        <Navbar/>
        <section id="menu" className="section section__menu">
          <h1 className="heading mb-4">Menu</h1>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <article className="menu-section__container">
                <h2 className="menu-section__title">{item1.category}</h2>
                <ul className="menu-section__list">
                {(this.state.appetizers.app1)?<MenuItem menu={this.state.appetizers.app1}/>:null}
                {(this.state.appetizers.app2)?<MenuItem menu={this.state.appetizers.app2}/>:null}
                {(this.state.appetizers.app3)?<MenuItem menu={this.state.appetizers.app3}/>:null}
                </ul>
              </article>
            </div>
            <div className="col-lg-6 col-md-12">
              <h2 className="menu-section__title">{item4.category}</h2>
              <ul className="menu-section__list">
              {(this.state.desserts.des1)?<MenuItem menu={this.state.desserts.des1}/>:null}
              {(this.state.desserts.des2)?<MenuItem menu={this.state.desserts.des2}/>:null}
              {(this.state.desserts.des3)?<MenuItem menu={this.state.desserts.des3}/>:null}
              </ul>
            </div>
  
          </div>
          <div className="row">
  
              <div className="col-lg-6 col-md-12">
                <article className="menu-section__container">
                  <h2 className="menu-section__title">{item7.category}</h2>
                  <ul className="menu-section__list">
                    <MenuItem menu={item7}/>
                    <MenuItem menu={item8} />
                  </ul>
                </article>  
              </div>
      
              <div className="col-lg-6 col-md-12">
                <article className="menu-section__container">
                  <h2 className="menu-section__title">{item9.category}</h2>
                  <ul className="menu-section__list">
                    <MenuItem menu={item9}/>
                    <MenuItem menu={item10} />
                    <MenuItem menu={item11}/>
                    <MenuItem menu={item12} />
                  </ul>
                </article>
              </div>
      
            </div>
        </section>
      </Fragment>
    );
  }
  
}

export default Menu;