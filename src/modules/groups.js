import { address, commerce, helpers, random } from 'faker'
import { find, sortBy } from 'lodash'

import { createSelector } from 'reselect'
import errorDispatcher from 'utils/errorDispatcher'
import initialState from './initialState'
import { schema } from 'normalizr'

// Actions
export const API_GET_GROUPS_REQUEST = 'API_GET_GROUPS_REQUEST'
export const API_GET_GROUPS_SUCCESS = 'API_GET_GROUPS_SUCCESS'
export const API_GET_GROUPS_ERROR = 'API_GET_GROUPS_ERROR'

export default function groupReducer(state = initialState.groups, action) {
    switch (action.type) {
        case API_GET_GROUPS_SUCCESS:
            return { ...state, ...action.result }
        case API_GET_GROUPS_REQUEST:
        case API_GET_GROUPS_ERROR:
            return { ...state }
        default:
            return state
    }
}

const delay = (duration) => {
    return function() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve()
            }, duration)
        })
    }
}

export const getGroupList = createSelector([(state) => state.groups], (groups) => {
    return groups ? sortBy(Object.values(groups), ['description', 'name']) : []
})

export const getGroupById = createSelector(
    [getGroupList, (id) => id],
    (groups, id) => (groups && groups.length ? find(groups, (group) => group.id === id) : undefined)
)

export const getGroupBySlug = createSelector([getGroupList, (state, slug) => slug], (groups, slug) => {
    return groups && groups.length ? find(groups, (group) => group.slug === slug) : undefined
})

export const getGroups = () => {
    return async function dispatcher(dispatch) {
        dispatch({ type: API_GET_GROUPS_REQUEST })

        try {
            await delay(2000)
            const result = []
            for (let index = 0; index < 48; index++) {
                const name = `${commerce.productAdjective()} ${commerce.department()}`
                result.push({
                    name,
                    description: address.state(),
                    id: random.uuid(),
                    slug: helpers.slugify(name),
                })
            }

            dispatch({
                type: API_GET_GROUPS_SUCCESS,
                result,
            })
        } catch (error) {
            errorDispatcher(error, API_GET_GROUPS_ERROR, dispatch)
        }
    }
}

export const groupSchema = new schema.Entity('groups')

export const groupListSchema = [groupSchema]
