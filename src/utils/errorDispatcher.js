const errorDispatcher = (error, type, dispatch, payload = null) => {
    dispatch({
        type,
        error,
        ...payload,
    })
}

export default errorDispatcher
