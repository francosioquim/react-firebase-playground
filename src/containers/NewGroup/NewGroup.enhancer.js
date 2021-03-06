import * as groupsModule from 'modules/groups'
import * as routeModule from 'modules/route'

import { compose, pure, setDisplayName, withHandlers } from 'recompose'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export default compose(
    setDisplayName('NewGroup'),
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
    withHandlers({
        handleCreateGroup: (props) => (values) => {
            props.actions.createGroup(values)
        },
    }),
    pure
    // uncomment below to require authentication
    // UserIsAuthenticated,
)
