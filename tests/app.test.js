import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Launcher from '../src/components/Launcher'

Enzyme.configure({ adapter: new Adapter() })

describe('Test started app', () => {
  it('it\'s render App ', () => {
    const wrapper = shallow(<Launcher />)
    expect(wrapper.find('div')).toHaveLength(2)
  })
})