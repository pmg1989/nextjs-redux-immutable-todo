const express = require('express')
const path = require('path')
const compression = require('compression')
const LRUCache = require('lru-cache')
const next = require('next')
const axios = require('axios')

const routes = require('../src/routes')

const port = parseInt(process.env.PORT, 10) || 3005
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handler = routes.getRequestHandler(app)

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1hour
})

function getCacheKey (req) {
  return `${req.url}`
}

async function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)
  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  try {
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams)
    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html)
      return
    }
    // Let's cache this page with production
    if (!dev) {
      ssrCache.set(key, html)
      res.setHeader('x-cache', 'MISS')
    }
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams)
  }
}

app.prepare().then(() => {
  const server = express()

  if (process.env.NODE_ENV === 'production') {
    server.use(compression())
  }

  // Use the `renderAndCache` utility defined below to serve pages
  server.get('/', (req, res) => {
    renderAndCache(req, res, '/')
  })

  server.get('/getTodos', async (req, res) => {
    const { data } = await axios.get('https://api.myjson.com/bins/aapid')
    res.send({
      list: data,
    })
  })

  server.get('/list', (req, res) => {
    renderAndCache(req, res, '/list')
  })

  server.get('/list/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    renderAndCache(req, res, '/list-detail', queryParams)
  })

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
