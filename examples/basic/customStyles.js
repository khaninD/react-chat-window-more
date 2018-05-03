import React from 'react'

import ReactChatWindowMore from '../../src/components/Launcher'
import Code from '../components/common/code-block'


const sourceCode = `\
import ReactChatWindowMore from 'react-chat-window-more';

const style = {
  bottom: 0,
  left: 0
}
<ReactChatWindowMore customStyle={style} />
`
const style = {
  bottom: 0,
  left: 0
}

export default () => (
  <div>
    <ReactChatWindowMore customStyle={style} />
    <Code>{ sourceCode }</Code>
  </div>
)
