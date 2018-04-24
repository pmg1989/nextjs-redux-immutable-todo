const REACT_APP_API_ENV = process.env.REACT_APP_API_ENV

module.exports = {
  API_HOST: {
    dev: 'https://api.myjson.com',
    staging: 'https://staging.api.com',
    prod: 'https://prod.api.com',
  }[REACT_APP_API_ENV],

  assetPrefix: {
    dev: '',
    staging: 'http://test5.mmstatic.airent.test.aiershou.com/react',
    prod: 'http://test5.mmstatic.airent.test.aiershou.com/react',
  }[REACT_APP_API_ENV],
}
