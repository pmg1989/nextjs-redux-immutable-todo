import { appConstants } from 'constants'

export const initTabBar = (selectedTab, status) => ({ type: appConstants.INIT_TABBAR, selectedTab, status })

export const changeTabBar = selectedTab => ({ type: appConstants.CHANGE_TABBAR, selectedTab })

export const toggleTabBar = status => ({ type: appConstants.TOGGLE_TABBAR, status })
