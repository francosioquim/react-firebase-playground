import { compose, lifecycle } from 'recompose'

export default compose(
    // Lifecycle
    lifecycle({
        componentDidMount() {
            // This is a good place to instantiate the network request.
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
