import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import headerIconImage from '../assets/images/chat.png'
import closeButton from '../assets/images/close-icon.png'

export default class ChatHeader extends Component {
  static defaultProps = {
    headerIcon: null,
    headerTitle: null
  }

  static propTypes = {
    headerIcon: PropTypes.element,
    headerTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }

  constructor() {
    super()
  }

  render() {
    const {headerIcon, headerTitle} = this.props
    return (
      <div className='rc-header'>
        <div className='rc-header__icon-container'>
          {
            headerIcon || <img src={headerIconImage} alt='react chat header icon' />
          }
        </div>
        <div className='rc-header__title-container'>
          {
            headerTitle || <span className='rc-header__title' >React chat</span>
          }
        </div>
        <button className='rc-header__close-button'>
          <img src={closeButton} alt='react chat close button' />
        </button>
      </div>
    )
  }
}