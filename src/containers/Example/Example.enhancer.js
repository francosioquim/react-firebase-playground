import { compose, setDisplayName } from 'recompose'
export default compose(
    setDisplayName('Example')
    // uncomment below to require authentication
    // UserIsAuthenticated,
)
