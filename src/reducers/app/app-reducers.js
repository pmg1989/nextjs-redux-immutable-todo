import { createReducer } from 'redux-create-reducer'
import Immutable from 'immutable'
import { appConstants } from 'constants'

const $app = Immutable.fromJS({
  tabBar: {
    active: '',
    show: true,
  },
})

const app = createReducer($app, {
  [appConstants.INIT_TABBAR]  (state, { selectedTab, status }) {
    return state.setIn(['tabBar', 'active'], selectedTab).setIn(['tabBar', 'show'], status)
  },
  [appConstants.CHANGE_TABBAR] (state, { selectedTab }) {
    return state.setIn(['tabBar', 'active'], selectedTab)
  },
  [appConstants.TOGGLE_TABBAR] (state) {
    const show = state.getIn(['tabBar', 'show'])
    return state.setIn(['tabBar', 'show'], !show)
  },
})

export default app
