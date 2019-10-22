import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { Link } from 'react-router-dom'

import NavItem from '../NavItem'

configure({ adapter: new Adapter() })

describe('<NavItem/>', () => {
  it('Should render Link with given hashlink prop = "false"', () => {
    const wrapper = shallow(<NavItem />)
    wrapper.setProps({ hashlink: false })
    expect(wrapper.find('.nav__link').text()).toBe('<Link />')
  })

  it('Should render HashLink with given hashlink prop = "false"', () => {
    const wrapper = shallow(<NavItem />)
    wrapper.setProps({ hashlink: true })
    expect(wrapper.find('.nav__link').text()).toBe('<HashLink />')
  })

  it('Prop name should set NavItem text and link', () => {
    const wrapper = shallow(<NavItem />)
    wrapper.setProps({ name: 'Home', hashlink: false })
    expect(wrapper.contains(<Link className='nav__link' to='/Home'>Home</Link>)).toEqual(true)
  })
})
