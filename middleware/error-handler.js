export function errorMiddleware () {
    return async (ctx, next) => {
      try {
        await next()
      } catch (err) {
        ctx.status = err.status || 500
        ctx.body = {message:err.message,type:err.type }
        ctx.app.emit('error', err, ctx)
      }
    }
  }
  