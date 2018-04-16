const REACT_APP_API_ENV = process.env.REACT_APP_API_ENV

module.exports = {
  PROXY_HOST: {
    dev: 'https://dev.proxy.com',
    staging: 'https://staging.proxy.com',
    prod: 'https://prod.proxy.com',
  }[REACT_APP_API_ENV],

  assetPrefix: {
    dev: '',
    staging: 'http://test5.mmstatic.airent.test.aiershou.com/reac',
    prod: 'http://test5.mmstatic.airent.test.aiershou.com/reac',
  }[REACT_APP_API_ENV],
}
