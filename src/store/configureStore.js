/* tslint:disable:no-any */
import {applyMiddleware, compose, createStore} from 'redux'

import reducers from '../reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunkMiddleware from 'redux-thunk'

export default function configureStore(initialState) {
  const middlewares = [
    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunkMiddleware,
  ]
  /* eslint no-underscore-dangle: 0 */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools

  const store = createStore(
    reducers,
    {...(initialState || {})},
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  return store
}
