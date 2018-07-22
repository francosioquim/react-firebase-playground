import * as constants from 'constants/actions'

import initialState from './initialState'

function uiReducer(state = initialState.ui, action) {
  switch (action.type) {
    case constants.UPDATE_HEADER_TITLE:
      return {
        ...state,
        headerTitle: action.title,
      }
    case constants.SHOW_HEADER_LOGIN:
      return {
        ...state,
        headerShowLogin: true,
      }
    case constants.HIDE_HEADER_LOGIN:
      return {
        ...state,
        headerShowLogin: false,
      }

    default:
      return state
  }
}

export default uiReducer
