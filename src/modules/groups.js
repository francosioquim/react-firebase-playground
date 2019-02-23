// import { address, commerce, helpers, random } from 'faker'
import { find, sortBy } from 'lodash'

import { createSelector } from 'reselect'
import errorDispatcher from 'utils/errorDispatcher'
import firebase from 'firebase'
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

export const createGroup = (values) => {
    return async function dispatcher(dispatch) {
        dispatch({ type: API_GET_GROUPS_REQUEST })

        try {
            const db = firebase.firestore()
            const query = await db.collection('groups').add({
                name: values.name,
                description: values.description,
            })
            console.log(query)
            /* 
            dispatch({
                type: API_GET_GROUPS_SUCCESS,
                result,
            })
            */
        } catch (error) {
            console.error(error)
            errorDispatcher(error, API_GET_GROUPS_ERROR, dispatch)
        }
    }
}

export const getGroups = () => {
    return async function dispatcher(dispatch) {
        dispatch({ type: API_GET_GROUPS_REQUEST })

        try {
            const db = firebase.firestore()
            const result = []
            const querySnapshot = await db.collection('groups').get()
            querySnapshot.forEach((doc) => {
                result.push(doc.data())
            })
            /* 
            for (let index = 0; index < 48; index++) {
                const name = `${commerce.productAdjective()} ${commerce.department()}`
                result.push({
                    name,
                    description: address.state(),
                    id: random.uuid(),
                    slug: helpers.slugify(name),
                })
            } */

            dispatch({
                type: API_GET_GROUPS_SUCCESS,
                result,
            })
        } catch (error) {
            console.error(error)
            errorDispatcher(error, API_GET_GROUPS_ERROR, dispatch)
        }
    }
}

export const groupSchema = new schema.Entity('groups')

export const groupListSchema = [groupSchema]
