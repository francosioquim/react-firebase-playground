import { getSessionKey } from 'utils/authentication'
const initialState = {
    user: {
        session: getSessionKey() || null,
    },
}

export default initialState
