import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import launcherIcon from './../assets/images/logo-no-bg.svg'
import launcherIconActive from './../assets/images/close-icon.png'

export default class Launcher extends Component {
  constructor(props) {
    super()
    this.state = {
      isOpen: false
    }
  }

  render() {
    const { customStyle } = this.props
    const isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen
    const classList = classNames({
      'reach-chat-window-more': true,
      opened: isOpen
    })
    return (
      <div style={customStyle ? customStyle : null} className={classList}>
        <div className='reach-chat-window-more__chat-logo'></div>
      </div>
    )
  }
}