import React, { Fragment, Component } from 'react';
import MenuItem from './MenuItem';
import Navbar from './Navbar';
import db from '../base';

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
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
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
    const { appetizers, desserts, salads, maindishes, links } = this.state;
    return (
      <Fragment>
        <Navbar name="Alkinoos Taverna" hashlink={false} links={links} />
        <section id="menu" className="section menu container fade-in">
          <h1 className="heading heading--center menu__heading">Menu</h1>
          <div className="row">
            <div className="section__col">
              <article className="menu__container">
                <h2 className="menu__title">{appetizers.category}</h2>
                <ul className="menu__list">
                  {appetizers.app1 ? <MenuItem menu={appetizers.app1} /> : null}
                  {appetizers.app2 ? <MenuItem menu={appetizers.app2} /> : null}
                  {appetizers.app3 ? <MenuItem menu={appetizers.app3} /> : null}
                </ul>
              </article>
            </div>
            <div className="section__col">
              <h2 className="menu__title">{desserts.category}</h2>
              <ul className="menu__list">
                {desserts.des1 ? <MenuItem menu={desserts.des1} /> : null}
                {desserts.des2 ? <MenuItem menu={desserts.des2} /> : null}
                {desserts.des3 ? <MenuItem menu={desserts.des3} /> : null}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="section__col">
              <article className="menu__container">
                <h2 className="menu__title">{salads.category}</h2>
                <ul className="menu__list">
                  {salads.sal1 ? <MenuItem menu={salads.sal1} /> : null}
                  {salads.sal2 ? <MenuItem menu={salads.sal2} /> : null}
                </ul>
              </article>
            </div>

            <div className="section__col">
              <article className="menu__container">
                <h2 className="menu__title">{maindishes.category}</h2>
                <ul className="menu__list">
                  {maindishes.main1 ? (
                    <MenuItem menu={maindishes.main1} />
                  ) : null}
                  {maindishes.main2 ? (
                    <MenuItem menu={maindishes.main2} />
                  ) : null}
                  {maindishes.main3 ? (
                    <MenuItem menu={maindishes.main3} />
                  ) : null}
                  {maindishes.main4 ? (
                    <MenuItem menu={maindishes.main4} />
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
