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
    })
)
