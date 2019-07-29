import React, { Fragment, Component } from 'react';
import MenuItem from './MenuItem';
import Navbar from './Navbar';
import NavItem from './NavItem';
import db from '../base';
//TODO restructure menu divs with component

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      appetizers: {},
      desserts: {},
      salads: {},
      maindishes: {},
      links: ['menu', 'book-table'],
    };
  }

  componentDidMount() {
    db.collection('menu')
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.setState({
            appetizers: doc.data().Appetizers,
            desserts: doc.data().Desserts,
            salads: doc.data().Salads,
            maindishes: doc.data()['Main-dishes'],
          });
        });
      });
  }

  render() {
    return (
      <Fragment>
        <Navbar name="Alkinoos Taverna">
          <NavItem name={this.state.links[0]} />
          <NavItem name={this.state.links[1]} />
        </Navbar>
        <section id="menu" className="section menu container">
          <h1 className="heading heading--center menu__heading">Menu</h1>
          <div className="row">
            <div className="section__col">
              <article className="menu__container">
                <h2 className="menu__title">
                  {this.state.appetizers.category}
                </h2>
                <ul className="menu__list">
                  {this.state.appetizers.app1 ? (
                    <MenuItem menu={this.state.appetizers.app1} />
                  ) : null}
                  {this.state.appetizers.app2 ? (
                    <MenuItem menu={this.state.appetizers.app2} />
                  ) : null}
                  {this.state.appetizers.app3 ? (
                    <MenuItem menu={this.state.appetizers.app3} />
                  ) : null}
                </ul>
              </article>
            </div>
            <div className="section__col">
              <h2 className="menu__title">{this.state.desserts.category}</h2>
              <ul className="menu__list">
                {this.state.desserts.des1 ? (
                  <MenuItem menu={this.state.desserts.des1} />
                ) : null}
                {this.state.desserts.des2 ? (
                  <MenuItem menu={this.state.desserts.des2} />
                ) : null}
                {this.state.desserts.des3 ? (
                  <MenuItem menu={this.state.desserts.des3} />
                ) : null}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="section__col">
              <article className="menu__container">
                <h2 className="menu__title">{this.state.salads.category}</h2>
                <ul className="menu__list">
                  {this.state.salads.sal1 ? (
                    <MenuItem menu={this.state.salads.sal1} />
                  ) : null}
                  {this.state.salads.sal2 ? (
                    <MenuItem menu={this.state.salads.sal2} />
                  ) : null}
                </ul>
              </article>
            </div>

            <div className="section__col">
              <article className="menu__container">
                <h2 className="menu__title">
                  {this.state.maindishes.category}
                </h2>
                <ul className="menu__list">
                  {this.state.maindishes.main1 ? (
                    <MenuItem menu={this.state.maindishes.main1} />
                  ) : null}
                  {this.state.maindishes.main2 ? (
                    <MenuItem menu={this.state.maindishes.main2} />
                  ) : null}
                  {this.state.maindishes.main3 ? (
                    <MenuItem menu={this.state.maindishes.main3} />
                  ) : null}
                  {this.state.maindishes.main4 ? (
                    <MenuItem menu={this.state.maindishes.main4} />
                  ) : null}
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
