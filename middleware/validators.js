import User from '../models/users'
import config from '../../config'
import * as jwt from 'jsonwebtoken'
import * as crypto from 'crypto'

/**
 * Function to verify if user is able to acess the system.
 * @param { Request } ctx HTTP context, request and response objescts into a single object
 * @param { Function } next Execute the next middleware function.
 * @return return next().
 */
export async function ensureUser(ctx, next) {
  const token = ctx.request.header.authorization
  if (!token) {
    ctx.throw(401)
  }

  let decoded = null

  try {

    decoded = jwt.verify(token, config.secret)

  } catch (err) {
    ctx.throw(401)
  }

  ctx.state.user = await User.findById(decoded.id,'-password');
  if (!ctx.state.user || ctx.state.user.type === "user") {
    ctx.throw(401)
  }

  return next()
}

// export async function ensureClient(ctx, next) {
//   const token = ctx.request.header.authorization
//   if (!token) {
//     ctx.throw(401)
//   }

//   let decoded = null

//   try {

//     decoded = jwt.verify(token, config.secret)

//   } catch (err) {
//     ctx.throw(401)
//   }

//   ctx.state.client = await Client.findById(decoded.id,'-password');
//   if (!ctx.state.client || ctx.state.client.type !== "user") {
//     ctx.throw(401)
//   }

//   return next()
// }