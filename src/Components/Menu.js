import React, {Fragment} from 'react';
import MenuItem from './MenuItem';
import menu from '../menu';
import Navbar from './Navbar';
//TODO restructure menu divs with component

const Menu = () => {

  const {item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12} = menu;

  return (
    <Fragment>
      <Navbar/>
      <section id="menu" className="section section__menu">
        <h1 className="heading mb-4">Menu</h1>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <article className="menu-section__container">
              <h2 className="menu-section__title">{item1.category}</h2>
              <ul className="menu-section__list">
                <MenuItem menu={item1}/>
                <MenuItem menu={item2} />
                <MenuItem menu={item3} />
              </ul>
            </article>
          </div>
          <div className="col-md-6 col-sm-12">
            <h2 className="menu-section__title">{item4.category}</h2>
            <ul className="menu-section__list">
              <MenuItem menu={item4}/>
              <MenuItem menu={item5} />
              <MenuItem menu={item6} />
            </ul>
          </div>

        </div>
        <div className="row">

            <div className="col-md-6 col-sm-12">
              <article className="menu-section__container">
                <h2 className="menu-section__title">{item7.category}</h2>
                <ul className="menu-section__list">
                  <MenuItem menu={item7}/>
                  <MenuItem menu={item8} />
                </ul>
              </article>  
            </div>
    
            <div className="col-md-6 col-sm-12">
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

export default Menu;