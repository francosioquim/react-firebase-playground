import * as groupsModule from 'modules/groups'
import * as routeModule from 'modules/route'

import { compose, lifecycle, mapProps, setDisplayName, withHandlers } from 'recompose'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import idx from 'idx'
import { matchPath } from 'react-router'

export default compose(
    setDisplayName('GroupDetails'),
    // mapStateToProps
    connect(
        // mapStateToProps
        (state, ownProps) => {
            const match = matchPath(ownProps.history.location.pathname, {
                path: '/groups/:slug',
                exact: true,
                strict: false,
            })
            const slug = idx(match, (_) => _.params.slug) || ''
            return {
                group: groupsModule.getGroupBySlug(state, slug),
                authUser: state.user.session,
            }
        },
        // mapDispatchToProps
        (dispatch) => {
            const actions = {
                ...groupsModule,
                ...routeModule,
            }

            return {
                actions: bindActionCreators(actions, dispatch),
            }
        }
    ),
    lifecycle({
        componentDidMount() {},
    }),
    withHandlers({
        onGroupsClick: (props) => () => {
            props.actions.redirect(`/groups`)
        },
    }),
    mapProps((ownProps) => {
        const groupOwnerUid = idx(ownProps, (_) => _.group.ownerUid)
        const authUserUid = idx(ownProps, (_) => _.authUser.uid)
        return {
            ...ownProps,
            isGroupOwner: groupOwnerUid && authUserUid && groupOwnerUid === authUserUid,
        }
    })
    // uncomment below to require authentication
    // UserIsAuthenticated,
)
