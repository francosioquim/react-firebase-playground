import { getSessionKey } from 'utils/authentication'
import { initialProgressState } from 'utils/progress'

const initialState = {
    user: {
        session: getSessionKey() || null,
        ownGroups: [],
    },
    groups: [],
    progress: {
        getGroups: initialProgressState,
    },
}

export default initialState
