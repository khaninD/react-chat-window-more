import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

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
    const {customWindowClassNames} = this.props
    return (
      <div className={ customWindowClassNames || 'rc-window' }></div>
    )
  }
}