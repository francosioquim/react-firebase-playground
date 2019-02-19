import { combineReducers } from 'redux'
import groups from './groups'
import progress from './progress'
import user from './user'

const reducers = combineReducers({
    user,
    progress,
    groups,
})

export default reducers
