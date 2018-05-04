import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ChatHeader from './ChatHeader'
export default class Window extends Component {
  static defaultProps = {
    customWindowStyle: null,
    customWindowClassNames: null
  }

  static propTypes = {
    customWindowStyle: PropTypes.object,
    customWindowClassNames: PropTypes.string
  }

  constructor() {
    super()
  }

  render() {
    const {customWindowClassNames, customWindowStyle} = this.props
    return (
      <div style={customWindowStyle} className={ customWindowClassNames || 'rc-window' }>
        <ChatHeader />
        {
          /*
            <ChatBody />
            <ChatFooter />
           */
        }
      </div>
    )
  }
}