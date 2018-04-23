const express = require('express')
const path = require('path')
const compression = require('compression')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3005
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const routes = require('../src/routes')
const todosRoutes = require('./api/todos')

const handler = routes.getRequestHandler(app)
const renderCache = require('./renderCache')(app, dev)

app.prepare().then(() => {
  const server = express()

  if (process.env.NODE_ENV === 'production') {
    server.use(compression())
  }

  server.use('/', renderCache)

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
