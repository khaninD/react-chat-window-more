import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import renderer from 'react-test-renderer'
import Launcher from '../src/components/Launcher'
import Icon from '../examples/images/chat.png'

Enzyme.configure({ adapter: new Adapter() })

describe('Test custom styles and classes', () => {
  it('it\'s render App ', () => {
    const wrapper = shallow(<Launcher />)
    expect(wrapper.find('.rc-laucher')).toHaveLength(1)
  })
  it('It\'s render App with custom styles', () => {
    const style = {
      left: 0,
      bottom: 0
    }
    const wrapper = shallow(<Launcher customStyle={style} />)
    expect(wrapper.find('.rc-laucher').prop('style')).toBe(style)
  })
  it('It\'s render App with custom Icon', () => {
    const customIcon = <div className='custom-chat-icon'>{Icon}</div>
    const wrapper = shallow(<Launcher customChatIcon={customIcon} />)
    expect(wrapper.find('.custom-chat-icon')).toHaveLength(1)
  })
  it('It\'s render App with custom classNames', () => {
    const customClassName = 'myCustomClassName'
    const wrapper = shallow(<Launcher customClassNames={customClassName} />)
    expect(wrapper.find(`.${customClassName}`)).toHaveLength(1)
  })
})

describe('Test events', () => {
  it('click on chatIcon', () => {
    const wrapper = shallow(<Launcher />)
    wrapper.find('.rc-laucher').simulate('click')
    expect(wrapper.find('.rc-laucher').hasClass('opened')).toBe(true)
  })

  it('matches snapshot', () => {
    const wrapper = shallow(<Launcher />)
    wrapper.find('.rc-laucher').simulate('click')
    const tree = renderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })
})