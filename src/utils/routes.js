import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export const getQueryStringParams = (query) => {
    return query
        ? (/^[?#]/.test(query) ? query.slice(1) : query).split('&').reduce((params, param) => {
              const [key, value] = param.split('=')
              return {
                  ...params,
                  [key]: value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '',
              }
          }, {})
        : {}
}
