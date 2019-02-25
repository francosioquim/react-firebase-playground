import './styles/index.css'
import 'typeface-poppins'

import Firebase, { FirebaseContext } from 'components/Firebase'
import { MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles'

import App from 'containers/App'
import { AppContainer } from 'react-hot-loader'
import { CssBaseline } from '@material-ui/core'
import JssProvider from 'react-jss/lib/JssProvider'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './configureStore'
import { create } from 'jss'
import preset from 'jss-preset-default'
import theme from 'styles/theme'

const store = configureStore()
const jss = create(preset())

const generateClassName = createGenerateClassName()

/* eslint no-undef: 0 */
ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <FirebaseContext.Provider value={new Firebase()}>
                        <App />
                    </FirebaseContext.Provider>
                </MuiThemeProvider>
            </JssProvider>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
)
