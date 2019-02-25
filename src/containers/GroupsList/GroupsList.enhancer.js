import * as groupsModule from 'modules/groups'
import * as routeModule from 'modules/route'

import { compose, lifecycle, setDisplayName, withHandlers } from 'recompose'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export default compose(
    setDisplayName('Groups List'),
    // uncomment below to require authentication
    // UserIsAuthenticated,
    connect(
        // mapStateToProps
        (state) => {
            return {
                groups: groupsModule.getGroupList(state),
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
    lifecycle({
        componentDidMount() {
            const { actions } = this.props
            actions.getGroups()
        },
    }),
    withHandlers({
        handleItemClick: (props) => (slug) => {
            props.actions.redirect(`/groups/${slug}`)
        },
    })
)
