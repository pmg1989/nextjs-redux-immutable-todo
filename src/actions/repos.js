export const GET_TOP_REPOS_SUCCESS = 'GET_TOP_REPOS_SUCCESS'

function onGetTopRepo (lang, payload) {
  return {
    type: GET_TOP_REPOS_SUCCESS,
    lang,
    payload
  }
}
