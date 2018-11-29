import React from 'react';
import HomeMenuItem from './HomeMenuItem';
import menu from '../menu';
//TODO restructure menu divs with component

const HomeMenu = (props) => {

  const {item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12} = menu;

  return (
    
    <section id="menu" className="section section__menu">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <article className="menu-section__container">
            <h2 className="menu-section__title">{item1.category}</h2>
            <ul className="menu-section__list">
              <HomeMenuItem menu={item1}/>
              <HomeMenuItem menu={item2} />
              <HomeMenuItem menu={item3} />
            </ul>
          </article>
        </div>
        <div className="col-md-6 col-sm-12">
          <h2 className="menu-section__title">{item4.category}</h2>
          <ul className="menu-section__list">
            <HomeMenuItem menu={item4}/>
            <HomeMenuItem menu={item5} />
            <HomeMenuItem menu={item6} />
          </ul>
        </div>

      </div>
      <div className="row">

          <div className="col-md-6 col-sm-12">
            <article className="menu-section__container">
              <h2 className="menu-section__title">{item7.category}</h2>
              <ul className="menu-section__list">
                <HomeMenuItem menu={item7}/>
                <HomeMenuItem menu={item8} />
              </ul>
            </article>  
          </div>
  
          <div className="col-md-6 col-sm-12">
            <article className="menu-section__container">
              <h2 className="menu-section__title">{item9.category}</h2>
              <ul className="menu-section__list">
                <HomeMenuItem menu={item9}/>
                <HomeMenuItem menu={item10} />
                <HomeMenuItem menu={item11}/>
                <HomeMenuItem menu={item12} />
              </ul>
            </article>
          </div>
  
        </div>
    </section>
  );
}

export default HomeMenu;