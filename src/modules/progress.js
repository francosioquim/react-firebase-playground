import { API_GET_GROUPS_ERROR, API_GET_GROUPS_REQUEST, API_GET_GROUPS_SUCCESS } from './groups'
import { errorProgressState, requestProgressState, successProgressState } from 'utils/progress'

import initialState from './initialState'

export default function progressReducer(state = initialState.progress, action) {
    switch (action.type) {
        case API_GET_GROUPS_REQUEST:
            return {
                ...state,
                getGroups: {
                    ...requestProgressState,
                },
            }
        case API_GET_GROUPS_SUCCESS:
            return {
                ...state,
                getGroups: {
                    ...successProgressState,
                },
            }
        case API_GET_GROUPS_ERROR:
            return {
                ...state,
                getGroups: {
                    ...errorProgressState,
                },
            }

        default:
            return state
    }
}
