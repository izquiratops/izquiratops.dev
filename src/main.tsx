import ReactDOM from 'react-dom'
import * as React from 'react'
import './style.css'

import Scene from './Scene'
import Overlay from './Overlay'

ReactDOM.render(
  <React.StrictMode>
    <Overlay />
    <Scene />
  </React.StrictMode>,
  document.getElementById('root')
)
