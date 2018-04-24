import axios from 'axios'

const baseURL = '/'

// 创建axios实例
const clientService = axios.create({
  baseURL,
  timeout: 5000,
})

// request拦截器
clientService.interceptors.request.use((config) => {
  // if (store.state.token) {
  //   // 让每个请求头部都携带token信息
  //   config.headers.AccessToken = store.state.token
  // }
  return config
}, (error) => {
  Promise.resolve(error)
})

// respone拦截器
clientService.interceptors.response.use((response) => {
  return response
}, (error) => {
  console.log(`error ${error}`)
  const status = error.response.status
  if (status === 403) { // 后台返回状态吗403 token验证失败
    // store.commit('SET_USER_OUT')
    // localStorage.setItem('vn-token', '')
    // store.commit('SHOW_SIGNIN_DIALOG') // 重新登录
  }

  return Promise.reject(error)
})

export default clientService
