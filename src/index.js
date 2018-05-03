import React from 'react'
import { render } from 'react-dom'
import Launcher from './components/Launcher'
import './assets/stylesheets/index.scss'

const container = document.getElementById('app')

render(<Launcher />, container)

