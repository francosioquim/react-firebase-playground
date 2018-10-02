import store from 'store2'

export const addToStorage = (key, value, local) => {
    return local ? store(key, value) : store.session(key, value)
}

export const getFromStorage = (key, local) => {
    return local ? store.get(key) : store.session.get(key)
}

export const removeFromStorage = (key, local) => {
    return local ? store.remove(key) : store.session.remove(key)
}

export const removeAll = () => {
    store.clear()
    store.session.clear()
}

export const getSessionToken = () => {
    const session = store.session.get('session')
    return session ? session.token : null
}
