import React from 'react'

import ReactChatWindowMore from '../../src/components/Launcher'
import Code from '../components/common/code-block'
import LogoIcon from '../images/chat.png'

const sourceCode = `\
import ReactChatWindowMore from 'react-chat-window-more';
import LogoIcon from '../images/chat.png'

<ReactChatWindowMore customChatIcon={LogoIcon} />
`

export default () => (
  <div>
    <ReactChatWindowMore customChatIcon={LogoIcon} />
    <Code>{ sourceCode }</Code>
  </div>
)