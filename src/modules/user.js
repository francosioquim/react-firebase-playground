import { getAuthorizationHeader, getSauceKeyHeader, saveRefreshToken, saveSessionKey } from 'utils/authentication'

import { API_URL } from 'config'
import axios from 'axios'
import errorDispatcher from 'utils/errorDispatcher'
import idx from 'idx'
import initialState from './initialState'
import { push } from 'connected-react-router'
import { removeAll } from 'utils/localStorage'

// Actions
export const API_LOGIN_REQUEST = 'API_LOGIN_REQUEST'
export const API_LOGIN_SUCCESS = 'API_LOGIN_SUCCESS'
export const API_LOGIN_ERROR = 'API_LOGIN_ERROR'

export const API_LOGOUT_REQUEST = 'API_LOGOUT_REQUEST'
export const API_LOGOUT_SUCCESS = 'API_LOGOUT_SUCCESS'
export const API_LOGOUT_ERROR = 'API_LOGOUT_ERROR'

export const API_RESET_REQUEST_REQUEST = 'API_RESET_REQUEST_REQUEST'
export const API_RESET_REQUEST_SUCCESS = 'API_RESET_REQUEST_SUCCESS'
export const API_RESET_REQUEST_ERROR = 'API_RESET_REQUEST_ERROR'

export const API_RESET_PASSWORD_REQUEST = 'API_RESET_PASSWORD_REQUEST'
export const API_RESET_PASSWORD_SUCCESS = 'API_RESET_PASSWORD_SUCCESS'
export const API_RESET_PASSWORD_ERROR = 'API_RESET_PASSWORD_ERROR'

export const API_REFRESH_SESSION_REQUEST = 'API_REFRESH_SESSION_REQUEST'
export const API_REFRESH_SESSION_SUCCESS = 'API_REFRESH_SESSION_SUCCESS'
export const API_REFRESH_SESSION_ERROR = 'API_REFRESH_SESSION_ERROR'

export const API_SET_OWN_GROUP_REQUEST = 'API_SET_OWN_GROUP_REQUEST'
export const API_SET_OWN_GROUP_SUCCESS = 'API_SET_OWN_GROUP_SUCCESS'
export const API_SET_OWN_GROUP_ERROR = 'API_SET_OWN_GROUP_ERROR'

export default function userReducer(state = initialState.user, action) {
    switch (action.type) {
        case API_LOGIN_REQUEST:
            return { ...state, session: null, errorMessage: '' }
        case API_LOGIN_SUCCESS:
            return { ...state, session: action.session }
        case API_LOGIN_ERROR:
            return { ...state, session: null, errorMessage: action.message }
        case API_LOGOUT_SUCCESS:
            return { ...state, session: null }
        case API_REFRESH_SESSION_SUCCESS:
            return { ...state, session: action.session }
        case API_LOGOUT_ERROR:
            return { ...state, session: null, errorMessage: action.message }
        case API_SET_OWN_GROUP_SUCCESS:
            return {
                ...state,
                ownGroups: Array.from(new Set([...state.ownGroups, action.ownGroups])),
            }
        case API_SET_OWN_GROUP_ERROR:
            return { ...state, ownGroups: null, errorMessage: action.message }
        default:
            return state
    }
}

export function loginUser(loginFields) {
    return async function dispatcher(dispatch) {
        dispatch({ type: API_LOGIN_REQUEST })

        try {
            const concatCreds = `${loginFields.email}:${Buffer.from(loginFields.password).toString('base64')}`

            await axios
                .post(
                    `${API_URL}/session`,
                    {},
                    {
                        headers: {
                            Authorization: `Basic ${Buffer.from(concatCreds).toString('base64')}`,
                        },
                    }
                )
                .then((result) => {
                    const { refreshToken, token: session } = idx(result, (_) => _.data.data.rows[0]) || null

                    saveSessionKey(session)

                    // save to local storage if rememberMe is checked
                    if (loginFields.rememberMe) {
                        saveRefreshToken(refreshToken)
                    }

                    dispatch({
                        type: API_LOGIN_SUCCESS,
                        session,
                    })
                    dispatch(push('/projects'))
                })
                .catch((error) => {
                    return Promise.reject(error.response)
                })
        } catch (error) {
            const errorCode = idx(error, (_) => _.data.status) || ''
            errorDispatcher(errorCode, API_LOGIN_ERROR, dispatch)
        }
    }
}

export function setAuthUser(authUser) {
    return async function dispatcher(dispatch) {
        if (authUser) {
            const { email, emailVerified, photoUrl, uid, displayName } = authUser

            dispatch({
                session: {
                    uid,
                    displayName,
                    email,
                    emailVerified,
                    photoUrl,
                },
                type: API_LOGIN_SUCCESS,
            })
        } else {
            dispatch({
                type: API_LOGIN_ERROR,
            })
        }
    }
}

export function logoutUser() {
    return async function dispatcher(dispatch) {
        dispatch({ type: API_LOGOUT_REQUEST })

        try {
            await axios.delete(`${API_URL}/session`, getAuthorizationHeader())
            dispatch({ type: API_LOGOUT_SUCCESS })
            removeAll()
            dispatch(push('/login'))
        } catch (error) {
            dispatch({
                type: API_LOGOUT_ERROR,
                error,
            })
        }
    }
}

export function refreshSession(refreshToken) {
    return async function dispatcher(dispatch) {
        dispatch({ type: API_REFRESH_SESSION_REQUEST })

        try {
            await axios
                .put(`${API_URL}/session`, { refreshToken }, getSauceKeyHeader())
                .then((result) => {
                    const { refreshToken: newRefreshToken, token: session } =
                        idx(result, (_) => _.data.data.rows[0]) || null

                    if (session && newRefreshToken) {
                        saveSessionKey(session)
                        saveRefreshToken(newRefreshToken)
                        dispatch({
                            type: API_REFRESH_SESSION_SUCCESS,
                            session,
                        })
                    } else {
                        throw Error
                    }
                })
                .catch((error) => {
                    dispatch({ type: API_REFRESH_SESSION_ERROR, error })
                    return Promise.reject(error.response)
                })
        } catch (error) {
            const errorCode = idx(error, (_) => _.data.status) || ''
            errorDispatcher(errorCode, API_REFRESH_SESSION_ERROR, dispatch)
        }
    }
}

export function resetPasswordRequest(email) {
    return async function dispatcher(dispatch) {
        dispatch({ type: API_RESET_REQUEST_REQUEST })

        try {
            await axios
                .post(`${API_URL}/user/password`, { email }, getSauceKeyHeader())
                .then((result) => {
                    dispatch({
                        type: API_RESET_REQUEST_SUCCESS,
                        result,
                    })
                })
                .catch((error) => {
                    return Promise.reject(error.response)
                })
        } catch (error) {
            const errorCode = idx(error, (_) => _.data.status) || ''
            errorDispatcher(errorCode, API_RESET_REQUEST_ERROR, dispatch)
        }
    }
}

export function resetPassword(password, token) {
    return async function dispatcher(dispatch) {
        dispatch({ type: API_RESET_PASSWORD_REQUEST })

        try {
            await axios
                .put(
                    `${API_URL}/user/password`,
                    {
                        token,
                        passwordHash: Buffer.from(password).toString('base64'),
                    },
                    getSauceKeyHeader()
                )
                .then((result) => {
                    dispatch({
                        type: API_RESET_PASSWORD_SUCCESS,
                        result,
                    })
                })
                .catch((error) => {
                    return Promise.reject(error.response)
                })
        } catch (error) {
            const errorCode = idx(error, (_) => _.data.status) || ''
            dispatch(push('/login'))
            errorDispatcher(errorCode, API_RESET_PASSWORD_ERROR, dispatch)
        }
    }
}
