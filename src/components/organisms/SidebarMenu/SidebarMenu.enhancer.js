import * as routeModule from 'modules/route'
import * as userModule from 'modules/user'

import { compose, pure, withHandlers } from 'recompose'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export default compose(
    connect(
        // mapStateToProps
        () => {
            return null
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
        goToGroups: (props) => () => {
            props.actions.redirect('/groups')
            props.onClose()
        },
        goToHome: (props) => () => {
            props.actions.redirect('/home')
            props.onClose()
        },
    }),
    pure
)
