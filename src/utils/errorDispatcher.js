import * as apiResponse from 'constants/sauceResponseCodes'

import { getRefreshToken } from 'utils/authentication'
import { push } from 'connected-react-router'
import { refreshSession } from 'modules/user'

const errorDispatcher = (code, type, dispatch, payload = null) => {
    // automatically intercept when session is expired
    if (code === apiResponse.SESSION_EXPIRED_RESPONSE_CODE) {
        const refreshToken = getRefreshToken()
        if (refreshToken) {
            // Send a refresh session request
            refreshSession(refreshToken)
        } else {
            dispatch(push('/login'))
        }
    } else if (apiResponse.mappedCode[code]) {
        dispatch({
            type,
            error: {
                message: apiResponse.mappedCode[code],
            },
            ...payload,
        })
    } else {
        dispatch({
            type,
            error: {
                message: apiResponse.UNKNOWN_RESPONSE_MESSAGE,
            },
            ...payload,
        })
    }
}

export default errorDispatcher
