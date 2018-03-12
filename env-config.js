const NODE_ENV = process.env.NODE_ENV

module.exports = {
  'process.env.BACKEND_URL': {
    'development': 'https://localhost:8080',
    'staging': 'https://staging.example.com',
    'production': 'https://api.example.com'
  }[NODE_ENV]
}
