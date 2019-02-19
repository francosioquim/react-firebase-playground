import { getSessionKey } from 'utils/authentication'
import { initialProgressState } from 'utils/progress'

const initialState = {
    user: {
        session: getSessionKey() || null,
    },
    groups: null,
    progress: {
        getGroups: initialProgressState,
    },
}

export default initialState
