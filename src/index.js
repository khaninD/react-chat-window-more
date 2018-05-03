import React from 'react'
import { render } from 'react-dom'
import Launcher from './components/Launcher'
import './assets/stylesheets/index.scss'

const container = document.getElementById('app')
const style = {
  left: 0,
  top: 0
}
render(<Launcher customStyle={style} />, container)

