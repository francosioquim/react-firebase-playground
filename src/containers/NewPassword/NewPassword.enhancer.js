import * as routeModule from 'modules/route'
import * as userModule from 'modules/user'

import { compose, withHandlers } from 'recompose'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getQueryStringParams } from 'utils/routes'
import idx from 'idx'

export default compose(
    connect(
        // mapStateToProps
        (state) => {
            const queryParams = getQueryStringParams(idx(state, (_) => _.router.location.search))
            return {
                hasError: idx(state, (_) => _.progress.reset.hasError) || false,
                errorMessage: idx(state, (_) => _.progress.reset.error.message) || null,
                resetSuccess:
                    (!idx(state, (_) => _.progress.reset.hasError) && idx(state, (_) => _.progress.reset.hasLoaded)) ||
                    false,
                token: queryParams && queryParams.token ? queryParams.token : '',
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
            props.actions.resetPassword(email, props.token)
        },
        goToLogin: (props) => () => {
            props.actions.redirect('/login')
        },
        goToReset: (props) => () => {
            props.actions.redirect('/reset')
        },
    })
)
