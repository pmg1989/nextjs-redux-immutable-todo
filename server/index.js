const express = require('express')
const path = require('path')
const compression = require('compression')
const next = require('next')
const todosRoutes = require('./api/todos')

const port = parseInt(process.env.PORT, 10) || 3005
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const routes = require('../src/routes')

const handler = routes.getRequestHandler(app)

const renderAndCache = require('./cache')(app, dev)

app.prepare().then(() => {
  const server = express()

  if (process.env.NODE_ENV === 'production') {
    server.use(compression())
  }

  server.get('/', (req, res) => {
    renderAndCache(req, res, '/')
  })

  server.get('/list', (req, res) => {
    renderAndCache(req, res, '/list')
  })

  server.get('/list/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    renderAndCache(req, res, '/list-detail', queryParams)
  })

  server.use('/api', todosRoutes)

  server.get('*', (req, res) => {
    if (req.url === '/sw.js') {
      return app.serveStatic(req, res, path.resolve('./static/sw.js'))
    }
    return handler(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
