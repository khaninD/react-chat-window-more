import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import launcherIcon from './../assets/images/logo-no-bg.svg'
import closeIcon from './../assets/images/close-icon.png'

export default class Launcher extends Component {
  constructor(props) {
    super()
    this.state = {
      isOpen: false
    }
  }

  handleClick = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { customStyle } = this.props
    const isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen
    const classList = classNames({
      'rc-laucher': true,
      opened: isOpen
    })
    return (
      <div style={customStyle || null} className={classList} onClick={this.handleClick}>
        <div className='rc-laucher__logo'>
          <img src={launcherIcon} className='rc-laucher__logo-base' />
          <img src={closeIcon} className='rc-laucher__logo-close' />
        </div>
      </div>
    )
  }
}
