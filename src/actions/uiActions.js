import * as constants from '../constants/actions'

export function updateHeaderTitle(title) {
  return function dispatcher(dispatch) {
    dispatch({ type: constants.UPDATE_HEADER_TITLE, title })
  }
}

export function showHeaderLogin() {
  return function dispatcher(dispatch) {
    dispatch({ type: constants.SHOW_HEADER_LOGIN })
  }
}

export function hideHeaderLogin() {
  return function dispatcher(dispatch) {
    dispatch({ type: constants.HIDE_HEADER_LOGIN })
  }
}

export default updateHeaderTitle
