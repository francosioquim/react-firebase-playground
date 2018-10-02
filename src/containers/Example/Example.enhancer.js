import * as routeModule from 'modules/route'

import { compose, setDisplayName } from 'recompose'

import { UserIsAuthenticated } from 'utils/authentication'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export default compose(
    setDisplayName('Example'),
    UserIsAuthenticated,
    connect(
        // mapStateToProps
        (state) => {
            return {}
        },
        // mapDispatchToProps
        (dispatch) => {
            const actions = {
                ...routeModule,
            }

            return {
                actions: bindActionCreators(actions, dispatch),
            }
        }
    )
)
