const REACT_APP_API_ENV = process.env.REACT_APP_API_ENV

module.exports = {
  'process.env.REACT_APP_API_ENV': REACT_APP_API_ENV,
  'process.env.BACKEND_URL': {
    dev: 'https://dev.api.com',
    staging: 'https://staging.api.com',
    prod: 'https://prod.api.com',
  }[REACT_APP_API_ENV],
}
