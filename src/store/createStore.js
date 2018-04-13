import Immutable from 'immutable'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware, compose } from 'redux'

import config from 'utils/config'
import rootReducer from '../reducers'

function createMiddlewares () { // { isServer }
  let middlewares = [
    thunkMiddleware,
  ]
  if (config.env === 'development' && typeof window !== 'undefined') {
    require('utils/rem')
    middlewares.push(createLogger({
      level: 'info',
      collapsed: true,
      stateTransformer: state => state.toJS(),
    }))
  }

  return middlewares
}

export const initStore = (initialState = {}, context) => {
  const { isServer } = context
  const middlewares = createMiddlewares({ isServer })

  return createStore(
    rootReducer,
    Immutable.fromJS(initialState),
    compose(
      applyMiddleware(...middlewares),
      typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}

export default comp => withRedux(initStore)(comp)
