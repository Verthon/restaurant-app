import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import NavItem from '../NavItem';

configure({ adapter: new Adapter() });

describe('<NavItem/>', () => {
  it('Should receive name prop', () => {
    const wrapper = shallow(<NavItem name="Home" />);
    expect(wrapper.prop('name')).toBe('Home');
  });
});
