const REACT_APP_API_ENV = process.env.REACT_APP_API_ENV

module.exports = {
  STATIC_HOST: {
    dev: 'http://test5.mmstatic.airent.test.aiershou.com/react',
    staging: 'http://staging.mmstatic.airent.test.aiershou.com/react',
    prod: 'http://prod.mmstatic.airent.test.aiershou.com/react',
  }[REACT_APP_API_ENV],

  PROXY_HOST: {
    dev: 'https://dev.proxy.com',
    staging: 'https://staging.proxy.com',
    prod: 'https://prod.proxy.com',
  }[REACT_APP_API_ENV],
}
