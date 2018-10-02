import './styles/index.css'
import 'typeface-roboto'

import App from 'containers/App'
import { AppContainer } from 'react-hot-loader'
import JssProvider from 'react-jss/lib/JssProvider'
import { MuiThemeProvider } from 'cake-ui-v1/styles'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './configureStore'
import { create } from 'jss'
import preset from 'jss-preset-default'
import theme from 'styles/theme'

const store = configureStore()
const jss = create(preset())

/* eslint no-undef: 0 */
ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <JssProvider jss={jss}>
                <MuiThemeProvider theme={theme}>
                    <App />
                </MuiThemeProvider>
            </JssProvider>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
)
