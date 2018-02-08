import './styles/index.css'
import 'typeface-alegreya-sans'

import App from './App'
import {MuiThemeProvider} from 'material-ui/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import theme from './styles/theme'

/* eslint no-undef: 0 */
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
)
