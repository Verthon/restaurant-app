import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import NavItem from './NavItem';

configure({adapter: new Adapter()});

describe('<NavItem/>', () => {
  it('Should receive name prop', () => {
    const wrapper = shallow(<NavItem name="Home"/>);
    expect(wrapper.props().name).to.equal("Home");
  });
});