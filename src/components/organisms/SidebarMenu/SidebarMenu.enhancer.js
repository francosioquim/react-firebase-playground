import * as groupsModule from 'modules/groups'
import * as routeModule from 'modules/route'
import * as userModule from 'modules/user'

import { compose, lifecycle, pure, withHandlers } from 'recompose'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import idx from 'idx'
import withFirebase from 'components/withFirebase'

export default compose(
    connect(
        // mapStateToProps
        (state) => {
            const ownGroupId = idx(state, (_) => _.user.ownGroups[0])
            return {
                group: state.groups && state.groups[ownGroupId],
                getGroupsProgress: state.progress.getGroups,
                authUser: state.user.session,
            }
        },
        // mapDispatchToProps
        (dispatch) => {
            const actions = {
                ...routeModule,
                ...userModule,
                ...groupsModule,
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
    pure,
    lifecycle({
        componentDidMount() {
            const { actions, authUser } = this.props
            if (authUser && authUser && authUser.uid) {
                // get own id
                actions.getOwnGroup(authUser.uid)
            }
        },
        componentDidUpdate(prevProps) {
            const { actions, authUser } = this.props
            if (prevProps.authUser !== authUser && authUser && authUser.uid) {
                // get own id
                actions.getOwnGroup(authUser.uid)
            }
        },
    })
)
