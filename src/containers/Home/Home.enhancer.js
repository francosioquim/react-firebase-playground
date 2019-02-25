import * as groupsModule from 'modules/groups'
import * as routeModule from 'modules/route'

import { compose, lifecycle, mapProps, setDisplayName } from 'recompose'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import idx from 'idx'
import withFirebase from 'components/withFirebase'

export default compose(
    setDisplayName('Home'),
    connect(
        // mapStateToProps
        (state) => {
            const ownGroupId = idx(state, (_) => _.user.ownGroups[0])

            return {
                groups: groupsModule.getGroupList(state),
                getGroupsProgress: state.progress.getGroups,
                group: state.groups && state.groups[ownGroupId],
                authUser: state.user.session,
                locationPath: idx(state, (_) => _.router.location.pathname),
            }
        },
        // mapDispatchToProps
        (dispatch) => {
            const actions = {
                ...routeModule,
                ...groupsModule,
            }

            return {
                actions: bindActionCreators(actions, dispatch),
            }
        }
    ),
    withFirebase,
    mapProps((ownProps) => {
        const groupOwnerUid = idx(ownProps, (_) => _.group.ownerUid)
        const authUserUid = idx(ownProps, (_) => _.authUser.uid)
        return {
            ...ownProps,
            isGroupOwner: groupOwnerUid && authUserUid && groupOwnerUid === authUserUid,
        }
    }),
    lifecycle({
        componentDidUpdate(prevProps) {
            const { actions, group, getGroupsProgress } = this.props
            if (prevProps.getGroupsProgress !== getGroupsProgress) {
                if (!getGroupsProgress.inProgress && getGroupsProgress.hasLoaded) {
                    // check if there is an ownGroup
                    if (!group) {
                        actions.redirect('/groups')
                    }
                }
            }
        },
    })
)
