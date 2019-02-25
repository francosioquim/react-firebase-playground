import { API_SET_OWN_GROUP_ERROR, API_SET_OWN_GROUP_SUCCESS } from './user'
// import { address, commerce, helpers, random } from 'faker'
import { find, sortBy } from 'lodash'
import { normalize, schema } from 'normalizr'

import { createSelector } from 'reselect'
import errorDispatcher from 'utils/errorDispatcher'
import firebase from 'firebase'
import idx from 'idx'
import initialState from './initialState'
import { push } from 'connected-react-router'
import slugify from 'slugify'

// Actions
export const API_GET_GROUPS_REQUEST = 'API_GET_GROUPS_REQUEST'
export const API_GET_GROUPS_SUCCESS = 'API_GET_GROUPS_SUCCESS'
export const API_GET_GROUPS_ERROR = 'API_GET_GROUPS_ERROR'

export const API_GET_GROUP_REQUEST = 'API_GET_GROUP_REQUEST'
export const API_GET_GROUP_SUCCESS = 'API_GET_GROUP_SUCCESS'
export const API_GET_GROUP_ERROR = 'API_GET_GROUP_ERROR'

export const API_CREATE_GROUP_REQUEST = 'API_CREATE_GROUP_REQUEST'
export const API_CREATE_GROUP_SUCCESS = 'API_CREATE_GROUP_SUCCESS'
export const API_CREATE_GROUP_ERROR = 'API_CREATE_GROUP_ERROR'

export default function groupReducer(state = initialState.groups, action) {
    switch (action.type) {
        case API_GET_GROUPS_SUCCESS:
            return { ...state, ...action.result }
        case API_CREATE_GROUP_SUCCESS:
            return {
                ...state,
                [`${action.result.uid}`]: action.result,
            }
        default:
            return state
    }
}

export const getGroupList = createSelector([(state) => state.groups], (groups) => {
    return groups ? sortBy(groups, ['description', 'name']) : []
})

export const getGroupById = createSelector(
    [getGroupList, (id) => id],
    (groups, id) => (groups && groups.length ? find(groups, (group) => group.id === id) : undefined)
)

export const getGroupBySlug = createSelector([getGroupList, (state, slug) => slug], (groups, slug) => {
    return groups && groups.length ? find(Object.values(groups), (group) => group.slug === slug) : undefined
})

export const createGroup = (values) => {
    return async function dispatcher(dispatch, getState) {
        dispatch({ type: API_CREATE_GROUP_REQUEST })
        try {
            const db = firebase.firestore()
            const userUid = idx(getState(), (_) => _.user.session.uid)
            const groupRef = await db.collection('groups').add({
                name: values.name,
                description: values.description,
                state: values.location,
                ownerUid: userUid,
                slug: slugify(values.name).toLowerCase(),
            })
            dispatch(push('/groups'))
            // refetch new gorup
            const group = await groupRef.get()
            if (group.exists) {
                dispatch({
                    type: API_CREATE_GROUP_SUCCESS,
                    result: {
                        ...group.data(),
                        uid: group.id,
                    },
                })
            }
        } catch (error) {
            errorDispatcher(error, API_CREATE_GROUP_ERROR, dispatch)
        }
    }
}

export const getOwnGroup = (ownerUid) => {
    return async function dispatcher(dispatch) {
        dispatch({ type: API_GET_GROUPS_REQUEST })
        try {
            const db = firebase.firestore()
            const result = []
            const querySnapshot = await db
                .collection('groups')
                .where('ownerUid', '==', ownerUid)
                .get()
            querySnapshot.forEach((group) => {
                result.push({
                    ...group.data(),
                    uid: group.id,
                })
                dispatch({
                    type: API_SET_OWN_GROUP_SUCCESS,
                    ownGroups: group.id,
                })
            })

            const normalizedGroups = normalize(result, groupsListSchema)

            dispatch({
                type: API_GET_GROUPS_SUCCESS,
                result: idx(normalizedGroups, (_) => _.entities.groups) || {},
            })
        } catch (error) {
            console.error(error)
            dispatch({
                type: API_SET_OWN_GROUP_ERROR,
                error,
            })
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
            querySnapshot.forEach((group) => {
                result.push({
                    ...group.data(),
                    uid: group.id,
                })
            })

            const normalizedGroups = normalize(result, groupsListSchema)

            dispatch({
                type: API_GET_GROUPS_SUCCESS,
                result: idx(normalizedGroups, (_) => _.entities.groups) || {},
            })
        } catch (error) {
            console.error(error)
            errorDispatcher(error, API_GET_GROUPS_ERROR, dispatch)
        }
    }
}

export const groupSchema = new schema.Entity(
    'groups',
    {},
    {
        idAttribute: 'uid',
    }
)
export const groupsListSchema = [groupSchema]
