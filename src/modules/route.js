import { push } from 'connected-react-router'

export const redirect = (pathname) => {
    return function dispatcher(dispatch) {
        dispatch(push(pathname))
    }
}

export default redirect
