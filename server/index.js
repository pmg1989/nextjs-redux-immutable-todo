
const express = require('express')
const path = require('path')
const compression = require('compression')
const next = require('next')

const routes = require('../routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  if (process.env.NODE_ENV === "production") {
    server.use(compression())
  }

  server.get('*', (req, res) => {
    if (req.url === '/sw.js') {
      return app.serveStatic(req, res, path.resolve('./static/sw.js'))
    } else {
      return handler(req, res);
    }
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
