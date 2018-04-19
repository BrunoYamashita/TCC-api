const glob = require('glob');
const Router = require('koa-router');

exports = module.exports = function initModules (app) {
  glob(`${__dirname}/*`, { ignore: '**/index.js' }, (err, matches) => {
    if (err) { throw err }

    matches.map((mod) => {
      const router = require(`${mod}/router`)

      const routes = router.default
      const baseUrl = router.baseUrl
      const instance = new Router({ prefix: baseUrl })

      routes.map((config) => {
        const {
          method = '',
          route = '',
          handlers = []
        } = config

        const lastHandler = handlers.pop()

        instance[method.toLowerCase()](route, ...handlers, async function(ctx) {
          return await lastHandler(ctx)
        })

        app
          .use(instance.routes())
          .use(instance.allowedMethods())
      })
    })
  })
}
