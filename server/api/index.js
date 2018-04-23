const express = require('express')

const router = express.Router()

module.exports = function () {
  router.use('/todos', require('./todos'))
  router.use('/products', require('./products'))

  return router
}
