import * as groupsModule from 'modules/groups'
import * as routeModule from 'modules/route'

import { compose, lifecycle, setDisplayName, withHandlers } from 'recompose'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export default compose(
    setDisplayName('Start a Group'),
    // mapStateToProps
    connect(
        // mapStateToProps
        () => {
            return {}
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
        componentDidUpdate() {},
    }),
    withHandlers({
        handleCreateGroup: (props) => (values) => {
            props.actions.createGroup(values)
        },
    })
    // uncomment below to require authentication
    // UserIsAuthenticated,
)
