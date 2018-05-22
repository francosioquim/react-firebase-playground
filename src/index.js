import React from 'react'
import 'typeface-nunito'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from 'cake-ui-v1/styles'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './App'
import './styles/index.css'
import theme from './styles/theme'
import configureStore from './store/configureStore'

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
