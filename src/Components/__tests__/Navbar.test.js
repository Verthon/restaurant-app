import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavLink } from 'react-router-dom';

import Navbar from '../Navbar';
import NavItem from '../NavItem';

configure({ adapter: new Adapter() });

describe('<Navbar />', () => {
  it('Should render number of NavItems provided by links array and default Home and Logo NavLinks', () => {
    const wrapper = shallow(<Navbar links={['menu', 'book-table']} hashlink={false} />);
    expect(wrapper.find(NavItem)).toHaveLength(2);
    expect(wrapper.find(NavLink)).toHaveLength(2);
  });
  it('Should render default NavItems("menu" and "book-table") inside of Navbar', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(NavItem)).toHaveLength(2);
    expect(wrapper.find(NavLink)).toHaveLength(2);
  });
});
