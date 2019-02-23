import * as routeModule from 'modules/route'
import * as userModule from 'modules/user'

import { compose, mapProps, withHandlers } from 'recompose'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import firebase from 'firebase'
import idx from 'idx'

export default compose(
    connect(
        // mapStateToProps
        (state) => {
            return {
                hasError: idx(state, (_) => _.progress.login.hasError) || false,
                errorMessage: idx(state, (_) => _.progress.login.error.message) || null,
            }
        },
        // mapDispatchToProps
        (dispatch) => {
            const actions = {
                ...routeModule,
                ...userModule,
            }

            return {
                actions: bindActionCreators(actions, dispatch),
            }
        }
    ),
    // Handlers
    withHandlers({
        onLogin: (props) => (loginFields) => {
            props.actions.loginUser(loginFields)
        },
    }),
    mapProps((ownProps) => {
        return {
            ...ownProps,
            uiConfig: {
                // Popup signin flow rather than redirect flow.
                signInFlow: 'popup',
                // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
                signInSuccessUrl: '/home',
                // We will display Google and Facebook as auth providers.
                signInOptions: [
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                ],
            },
        }
    })
)
