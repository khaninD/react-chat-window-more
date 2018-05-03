import React from 'react'

import ReactChatWindowMore from '../../src/components/Launcher'
import Code from '../components/common/code-block'


const sourceCode = `\
import ReactChatWindowMore from 'react-chat-window-more';

<ReactChatWindowMore />
`

export default () => (
  <div>
    <ReactChatWindowMore />
    <Code>{ sourceCode }</Code>
  </div>
)
