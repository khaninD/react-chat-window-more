import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import isFunction from 'lodash/isFunction'
import launcherIcon from './../assets/images/logo-no-bg.svg'
import closeIcon from './../assets/images/close-icon.png'
import { LaucherConstants } from '../constants'
import Window from './Window'

const {
  closeButtonAlt,
  logoAlt
} = LaucherConstants
export default class Launcher extends Component {
  static defaultProps = {
    customStyle: null,
    customChatIcon: [
      <img key={0} src={launcherIcon} className='rc-laucher__logo-base' alt={logoAlt} />,
      <img key={1} src={closeIcon} className='rc-laucher__logo-close' alt={closeButtonAlt} />
    ],
    customClassNames: null
  }
  static propTypes = {
    customStyle: PropTypes.object,
    customChatIcon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ]),
    customClassNames: PropTypes.string
  }
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  handleClick = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { customStyle, customChatIcon, customClassNames } = this.props
    const isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen
    const classList = classNames({
      'rc-laucher': true,
      opened: isOpen
    })
    return (
      <div style={customStyle} className={customClassNames || classList} onClick={this.handleClick}>
        <div className='rc-laucher__logo'>
          {customChatIcon}
        </div>
        <div className='rc-laucher__chat-container'>
          {
            isOpen && <Window />
          }
        </div>
      </div>
    )
  }
}
