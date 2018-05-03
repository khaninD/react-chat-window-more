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
  it('It\'s render App with custom styles', () => {
    const style = {
      left: 0,
      bottom: 0
    }
    const wrapper = shallow(<Launcher customStyle={style} />)
    expect(wrapper.find('.reach-chat-window-more').prop('style')).toBe(style)
  })
})