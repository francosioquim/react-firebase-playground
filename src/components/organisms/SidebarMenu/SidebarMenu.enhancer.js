import * as routeModule from 'modules/route'
import * as userModule from 'modules/user'

import { compose, pure, withHandlers } from 'recompose'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import withFirebase from 'components/withFirebase'

export default compose(
    connect(
        // mapStateToProps
        () => {
            return {}
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
    withFirebase,
    // Handlers
    withHandlers({
        goToGroups: (props) => () => {
            props.actions.redirect('/groups')
            props.onClose()
        },
        goToNewGroup: (props) => () => {
            props.actions.redirect('/groups/new')
            props.onClose()
        },
        goToHome: (props) => () => {
            props.actions.redirect('/home')
            props.onClose()
        },
        logOut: (props) => () => {
            props.firebase.auth.signOut()
        },
    }),
    pure
)
