export const requestProgressState = {
    inProgress: true,
}

export const successProgressState = {
    inProgress: false,
    hasLoaded: true,
    hasError: false,
    success: true,
}

export const errorProgressState = {
    inProgress: false,
    hasLoaded: true,
    hasError: true,
    success: false,
    error: {},
}

export const initialProgressState = {
    inProgress: false,
    hasLoaded: false,
    hasError: false,
    success: false,
}
