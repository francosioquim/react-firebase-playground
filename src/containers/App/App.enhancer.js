import * as routeModule from 'modules/route'
import * as userModule from 'modules/user'

import { compose, lifecycle } from 'recompose'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import withFirebase from 'components/withFirebase'

export default compose(
    connect(
        // mapStateToProps
        (state) => {
            return {
                user: state.user,
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
    // Lifecycle
    withFirebase,
    lifecycle({
        componentDidMount() {
            const { firebase, actions } = this.props
            firebase.auth.onAuthStateChanged((authUser) => {
                if (authUser === null || authUser === undefined) {
                    // redirect to login
                    actions.redirect(`/login`)
                }
                actions.setAuthUser(authUser)
            })
        },
        /*
    componentDidUpdate(prevProps, prevState, snapshot) {
      // This is also a good place to do network requests as long as you compare the current props to previous props
    },
    */
        /*
    componentDidCatch(error, info) {
      // handleError here
    }
    */
    })
)
