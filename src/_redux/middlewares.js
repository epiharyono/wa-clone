import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'
import {applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'

const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
)

const middlewares = applyMiddleware(
    navMiddleware,
    createLogger(),
    promiseMiddleware(),
    thunk
)

export default middlewares
