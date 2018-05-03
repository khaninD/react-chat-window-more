import React from 'react'
import { render } from 'react-dom'
import Launcher from './components/Launcher'

const container = document.getElementById('app')
render(<Launcher data={[ 0, 1, 2, 3, 4, 5 ]} />, container)

