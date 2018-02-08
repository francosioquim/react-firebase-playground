import './styles/index.css'
import 'typeface-nunito'

import App from './App'
import {MuiThemeProvider} from 'material-ui/styles'
import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import theme from './styles/theme'

injectTapEventPlugin()

const store = configureStore()

/* eslint no-undef: 0 */
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
