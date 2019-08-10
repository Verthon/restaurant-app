import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MenuItem from '../MenuItem';

configure({ adapter: new Adapter() });

describe('<MenuItem/>', () => {
  it('Should change modal-book class based on show prop', () => {
    const props = {
      name: 'Tzatziki',
      price: 390,
      desc: 'Refreshing traditional cucumber and garlic youghurt dip',
    };
    const wrapper = shallow(<MenuItem menu={props} />);
    expect(wrapper);
  });
});
