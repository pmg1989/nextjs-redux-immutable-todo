const nextRoutes = require('next-routes')

const routes = module.exports = nextRoutes()

const APP_ROUTES = [{
  page: 'index',
  pattern: '/',
}, {
  page: 'list',
  pattern: '/list',
}, {
  name: 'list-detail',
  page: 'list-detail',
  pattern: '/list/:id',
}, {
  page: 'help/index',
  pattern: '/help/index',
}]

APP_ROUTES.forEach(route => routes.add(route))
