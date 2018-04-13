import { combineReducers } from 'redux-immutable'

import app from './app'
import tasks from './tasks'

export default combineReducers({
  app,
  tasks,
})
