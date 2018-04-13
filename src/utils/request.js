/* global FormData */
import fetch from 'isomorphic-fetch'
import NProgress from 'nprogress'
import { browserHistory } from 'react-router'
import { appConstants } from 'constants'
import { isApp } from 'utils/app'
import { baseURL, wstoken, wstokenFuncs } from 'utils/config'

function checkStatus (res) {
  if (res.status >= 200 && res.status < 300) {
    return res.json()
  }

  const error = new Error(res.statusText)
  error.response = res
  throw error
}

function handelData (res) {
  NProgress.done()
  if (res.errorcode && res.errorcode === 'invalidtoken') {
    browserHistory.push(isApp() ? '/introduce' : '/login')
    return false
  }
  return res
}

function handleError (error) {
  NProgress.done()
  console.error(error.stack)
}

export function request (data, method = 'POST') {
  NProgress.start()
  let body = new FormData()
  if (wstokenFuncs.includes(data.wsfunction)) {
    body.append('wstoken', wstoken)
  } else {
    body.append('wstoken', localStorage.getItem(appConstants.UTOKEN))
  }
  body.append('moodlewsrestformat', 'json')
  for (let key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      body.append(key, data[key])
    }
  }
  return fetch(baseURL, { body, method })
         .then(checkStatus)
         .then(handelData)
         .catch(handleError)
}

export function get (url) {
  NProgress.start()
  return fetch(baseURL + url)
         .then(checkStatus)
         .then(handelData)
         .catch(handleError)
}
