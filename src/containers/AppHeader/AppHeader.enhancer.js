import * as routeModule from 'modules/route'
import * as userModule from 'modules/user'

import { compose, withHandlers } from 'recompose'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export default compose(
    connect(
        // mapStateToProps
        (state) => {
            return {
                pathname: state.router.location.pathname,
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
        goTo: (props) => (route) => {
            props.actions.redirect(`/${route}`)
        },
        onLogout: (props) => () => {
            props.actions.logoutUser()
        },
    })
)
