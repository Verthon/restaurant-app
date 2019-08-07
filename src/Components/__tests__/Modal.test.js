import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../Modal';

configure({ adapter: new Adapter() });

describe('<Modal/>', () => {
  it('Should change modal-book class based on show prop', () => {
    const wrapper = shallow(<Modal show={false} />);
    expect(wrapper.find('.modal-book').hasClass('modal-book--active')).toEqual(false);
    expect(wrapper.find('.modal-book').hasClass('modal-book--disabled')).toEqual(true);
  });
});
