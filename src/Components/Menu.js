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
        console.log(doc.data()["Main-dishes"]);
        this.setState({
          appetizers: doc.data().Appetizers,
          desserts: doc.data().Desserts,
          salads: doc.data().Salads,
          maindishes: doc.data()["Main-dishes"]
        });
      });
    }) ;
  }

  render(){
    const {item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12} = menu;
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
                  {(this.state.salads.sal1)?<MenuItem menu={this.state.salads.sal1}/>:null}
                  {(this.state.salads.sal2)?<MenuItem menu={this.state.salads.sal2}/>:null}
                  </ul>
                </article>  
              </div>
      
              <div className="col-lg-6 col-md-12">
                <article className="menu-section__container">
                  <h2 className="menu-section__title">{item9.category}</h2>
                  <ul className="menu-section__list">
                  {(this.state.maindishes.main1)?<MenuItem menu={this.state.maindishes.main1}/>:null}
                  {(this.state.maindishes.main2)?<MenuItem menu={this.state.maindishes.main2}/>:null}
                  {(this.state.maindishes.main3)?<MenuItem menu={this.state.maindishes.main3}/>:null}
                  {(this.state.maindishes.main4)?<MenuItem menu={this.state.maindishes.main4}/>:null}
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