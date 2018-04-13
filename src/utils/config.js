const API_ENV = process.env.API_ENV

export default {
  env: process.env.NODE_ENV,
  mode: process.env.MODE,
  API_ENV,
  STATIC_HOST: {
    development: 'http://test5.mmstatic.airent.test.aiershou.com/react',
    staging: 'http://test5.mmstatic.airent.test.aiershou.com/react',
    production: 'http://test5.mmstatic.airent.test.aiershou.com/react',
  }[API_ENV],
  PROXY_HOST: {
    development: 'https://api.myjson.com/bins',
    staging: 'https://staging.api.com',
    production: 'https://production.api.com',
  }[API_ENV],
  zhugeAppKey: {
    development: '123',
    staging: '456',
    production: '789',
  }[API_ENV],
}
