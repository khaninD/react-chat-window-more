import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Button, Welcome } from '@storybook/react/demo'

import './stylesheets/index.scss'
import ReactChatWindowMoreBasic from '../examples/basic'
import ReactChatWindowMoreCustomStyle from '../examples/basic/customStyles'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('React Chat Window More', module)
  .add('basic', () => <ReactChatWindowMoreBasic />)
  .add('with custom Style', () => (
    <ReactChatWindowMoreCustomStyle />
  ))
