import { REFRESH_TOKEN_KEY, SAUCE_KEY, SESSION_KEY } from 'config'
import { addToStorage, getFromStorage } from 'utils/localStorage'
import { decrypt, encrypt } from 'utils/crypto'

import ProgressLoader from 'components/atoms/ProgressLoader'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import idx from 'idx'
import { push } from 'connected-react-router'

export const saveSessionKey = (sessionToken, refreshToken) => {
    // Do not save the RAW refresh token to local Storage
    addToStorage(SESSION_KEY, sessionToken)

    if (refreshToken) {
        addToStorage(REFRESH_TOKEN_KEY, refreshToken)
    }
}

export const getSessionKey = () => {
    return getFromStorage(SESSION_KEY)
}

export const saveRefreshToken = (refreshToken) => {
    // Do not save the RAW refresh token to local Storage
    addToStorage(REFRESH_TOKEN_KEY, encrypt(refreshToken), true)
}

export const getRefreshToken = () => {
    // Try to retrieve refresh token key from session storage
    const refreshToken = getFromStorage(REFRESH_TOKEN_KEY)
    if (refreshToken) {
        return refreshToken
    }
    const encryptedRefreshToken = getFromStorage(REFRESH_TOKEN_KEY, true)
    return encryptedRefreshToken ? decrypt(encryptedRefreshToken) : undefined
}

export const getAuthorizationHeader = () => {
    return {
        headers: {
            'X-Sauce-Session': getSessionKey(),
            'X-Sauce-Key': SAUCE_KEY,
        },
    }
}

export const getSauceKeyHeader = () => {
    return {
        headers: {
            'X-Sauce-Key': SAUCE_KEY,
        },
    }
}

/**
 * @description Higher Order Component that redirects to `/login` instead
 * rendering if user is not authenticated (default of redux-auth-wrapper).
 * @param {Component} componentToWrap - Component to wrap
 * @return {Component} wrappedComponent
 */
export const UserIsAuthenticated = connectedRouterRedirect({
    // A nice display name for this check
    wrapperDisplayName: 'UserIsAuthenticated',
    AuthenticatingComponent: ProgressLoader,
    LoadingComponent: ProgressLoader,
    // The url to redirect user to if they fail
    redirectPath: '/login',
    // If selector is true, wrapper will not redirect
    // Prevents redirection while the App reads the refresh_token from local storage
    // See App.enhancer.js
    authenticatingSelector: (state) => {
        // Allow redirection if there's no session or refresh token
        return !!(getRefreshToken() && !idx(state, (_) => _.progress.login.hasLoaded))
    },
    // For example let's check that state contains user data
    authenticatedSelector: (state) => {
        return !!idx(state, (_) => _.user.session)
    },
    redirectAction: () => (dispatch) => {
        dispatch(push('/login'))
    },
})
