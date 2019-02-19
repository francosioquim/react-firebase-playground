import * as routeModule from 'modules/route'
import * as userModule from 'modules/user'

import { compose, withHandlers } from 'recompose'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import idx from 'idx'

export default compose(
    connect(
        // mapStateToProps
        (state) => {
            return {
                hasError: idx(state, (_) => _.progress.resetRequest.hasError) || false,
                errorMessage: idx(state, (_) => _.progress.resetRequest.error.message) || null,
                resetSuccess:
                    (!idx(state, (_) => _.progress.resetRequest.hasError) &&
                        idx(state, (_) => _.progress.resetRequest.hasLoaded)) ||
                    false,
                pathname: idx(state, (_) => _.router.location.pathname) || '',
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
        onReset: (props) => (email) => {
            props.actions.resetPasswordRequest(email)
        },
        goToLogin: (props) => () => {
            props.actions.redirect('/login')
        },
    })
)
