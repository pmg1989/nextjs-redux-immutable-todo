const REACT_APP_API_ENV = process.env.REACT_APP_API_ENV

module.exports = {
  assetPrefix: {
    dev: '',
    staging: 'http://test5.mmstatic.airent.test.aiershou.com/react',
    prod: 'http://test5.mmstatic.airent.test.aiershou.com/react',
  }[REACT_APP_API_ENV],
}
