const express = require('express')

const router = express.Router()

module.exports = function (app, dev) {
  const renderAndCache = require('./cache')(app, dev)

  router.get('/', (req, res) => {
    renderAndCache(req, res, '/')
  })

  router.get('/list', (req, res) => {
    renderAndCache(req, res, '/list')
  })

  router.get('/list/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    renderAndCache(req, res, '/list-detail', queryParams)
  })

  return router
}
