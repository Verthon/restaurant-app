import React, { Component, Fragment } from 'react';
import Header from './Header';
import HomeNavbar from './HomeNavbar';
import NavItem from './NavItem';
import Footer from './Footer';
import '../App.scss';
import db from '../base';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg from '../images/brooke-lark-about.jpg';
import about1Img from '../images/brooke-lark-about1.jpg';
import menuImg from '../images/brooke-lark-menu.jpg';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      location: {},
      hours: false,
      links: ['About', 'Menu', 'Reviews', 'Contact'],
    };
  }

  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
    db.collection('location')
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.setState({
            location: { ...doc.data() },
          });
        });
      });
    db.collection('hours')
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.setState({
            hours: { ...doc.data() },
          });
        });
      });
  }

  render() {
    return (
      <Fragment>
        <Header animation={['fade-up']}>
          <HomeNavbar name={this.state.hours.name}>
            <NavItem name={this.state.links[0]} />
            <NavItem name={this.state.links[1]} />
            <NavItem name={this.state.links[2]} />
            <NavItem name={this.state.links[3]} />
          </HomeNavbar>
        </Header>
        <article id="About" className="section section__about">
          <div className="row">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-down"
              data-delay="1500"
            >
              <picture>
                <source />
                <img
                  className="img-fluid"
                  src={aboutImg}
                  alt="example dish from our restaurant"
                />
              </picture>
              <picture>
                <source />
                <img
                  className="img-fluid"
                  src={about1Img}
                  alt="example dish from our restaurant"
                />
              </picture>
            </div>
            <article
              className="col-lg-6 col-md-12 section__about__description"
              data-aos="fade-up"
              data-delay="700"
            >
              <h2 className="section__about__title heading heading--gold">
                Just the right food
              </h2>
              <p className="section__description">
                If you’ve been to one of our restaurants, you’ve seen – and
                tasted – what keeps our customers coming back for more. Perfect
                materials and freshly baked food, delicious Baklava,
                Koulourakia, and gourmet coffees make us hard to resist! Stop in
                today and check us out!
              </p>
              <img
                className="img-fluid"
                src="/images/cook.jpg"
                alt="our chef"
              />
            </article>
          </div>
        </article>
        <div id="Menu" className="section">
          <div className="row">
            <div className="col-md-6">
              <img
                className="img-fluid section__image"
                src={menuImg}
                alt="example dish from our restaurant"
              ></img>
            </div>
            <div className="col-md-6">
              <h2 className="heading">Discover our menu!</h2>
              <p className="section__description">
                For those with pure food indulgence in mind, come next door and
                sate your desires with our ever changing internationally and
                seasonally inspired small plates. We love food, lots of
                different food, just like you.{' '}
              </p>
              <div className="col-md-12 text-center">
                <button className="btn btn--dark" data-aos="flip-up">
                  <a href="/menu">see the menu</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <article id="Reviews" className="section section__testimonials">
          <div className="row">
            <div className="testimonials">
              <div className="testimonials__modal">
                <h2 className="heading testimonials__modal__heading">
                  Guest reviews
                </h2>
                <blockquote className="testimonials__modal__quote">
                  If you've been to one of our restaurants, you've seen - and
                  tasted - what keeps our customers coming back for more.
                  Perfect materials and freshly baked food, delicious Baklavas ,
                  Koulourakia, and gourmet coffees make us hard to resist! Stop
                  in today and check out us
                  <p className="quote-writer" data-aos="fade" data-delay="500">
                    food magazine, Mark Blue
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </article>

        {this.state.hours ? (
          <Footer hours={this.state.hours} location={this.state.location} />
        ) : null}
      </Fragment>
    );
  }
}

export default Home;
