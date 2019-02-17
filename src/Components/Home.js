import React, {Component, Fragment} from 'react';
import Header from './Header';
import HomeNavbar from './HomeNavbar';
import NavItem from './NavItem';
import HeaderContent from './HeaderContent';
import Footer from './Footer';
import '../App.scss';
import db from '../base';



class Home extends Component {
  constructor(){
    super();
    this.state={
      location: {},
      hours: false, 
      links:[
        'About',
        'Ingredients',
        'Menu',
        'Reviews'
      ]    
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
            <NavItem name={this.state.links[0]}/>
            <NavItem name={this.state.links[1]}/>
            <NavItem name={this.state.links[2]}/>
            <NavItem name={this.state.links[3]}/>
          </HomeNavbar>
          <HeaderContent/>
        </Header>
        <article id="About" className="section section__about">
          <div className="row">

            <div className="col-lg-6 col-md-12">
              <h2 className="section__about__title heading heading--gold">Just the right food</h2>
              <p className="section__about__description">If you’ve been to one of our restaurants, 
                you’ve seen – and tasted – what keeps our customers coming back for more. 
                Perfect materials and freshly baked food, delicious Lambda cakes,  
                muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!
              </p>
              <img className="img-fluid" src="/images/cook.jpg" alt="our chef" />
            </div>

            <div className="col-lg-6 col-md-12">
              <img className="img-fluid" src="/images/brooke-lark_shakes.jpg" alt="example dish from our restaurant" />
            </div>

          </div>
        </article>
        <section id="Ingredients" className="section section__ingredients" >
          <div className="row">

            <div className="offset-md-3 offset-lg-1"></div>

            <div className="col-lg-10 col-sm-12">
              <article className="section__ingredients__modal">
                <h2 className="section__ingredients__title heading">Fine ingredients</h2>
                <p className="section__ingredients__description">If you’ve been to one of our restaurants, 
                  you’ve seen – and tasted – what keeps our customers coming back for more. 
                  Perfect materials and freshly baked food, delicious Lambda cakes,  
                  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!
                </p>
                <div className="ingredients-section__images">
                  <img src="/images/wheat.jpg" alt="wheat"/>
                  <img src="/images/curry.jpg" alt="red curry"/>
                  <img src="/images/bread.jpg" alt="white bread"/>
                </div>
              </article>       
            </div>

          </div>
        </section>
        <div id="Menu" className="row p-5">
          <div className="col-md-6">
            <img className="img-fluid" src="/images/reviews.jpg" alt="example dish from our restaurant"></img>
          </div>
          <div className="col-md-6">
            <h2 className="heading">Discover our menu!</h2>
            <p>For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates. We love food, lots of different food, just like you. </p>
            <div className="col-md-12 text-center">
              <a href="/menu"><button className="site-header__btn m-5">see the menu</button></a>
            </div>
          </div>
        </div>

        <article id="Reviews" className="section section__testimonials">
          <div className="row">
            <div className="offset-sm-2"></div>
            <div className="col-sm-8">
              <div className="section__testimonials__modal">
                <h2 className="heading testimonials__modal__heading">Guest reviews</h2>
                <blockquote className="testimonials__modal__quote">If you've been to one of our 
                  restaurants, you've seen - and tasted - what keeps our customers coming back for
                more. Perfect materials and freshly baked food, delicious Resto cakes, muffins, 
              and gourmet coffees make us hard to resist! Stop in today and check out us
            <p className="quote-writer">food magazine, Mark Blue</p></blockquote>
              </div>
            </div>
          </div>
        </article>

        {(this.state.hours)? <Footer hours={this.state.hours} location={this.state.location}/> : null }
      </Fragment>
    )
  }
}

export default Home;