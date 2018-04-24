import * as orderRepository from './repository';

/**
 * Asyncronous function to create and order in the aplication.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns a message of sucess and order object.
 * 
 */
export async function createOrder(ctx) {

  let order = await orderRepository.createOrder(ctx.request.body.order);

  ctx.body = {
    message: 'successfully found',
    order: order
  }
}

/**
 * Asyncronous function to find orders.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns order list.
 */
export async function findOrders(ctx) {
  let params = Object.assign({}, ctx.query);

  let limit = 0,
    skip = 0

  if (params.limit) {
    limit = parseInt(params.limit);
    delete params.limit;
  }

  if (params.skip) {
    skip = parseInt(params.skip);
    delete params.skip;
  }

  const order = await orderRepository.findOrders(params, {
    skip,
    limit
  });

  ctx.body = {
    message: 'successfully found',
    order: order
  }
}

/**
 * Asyncronous function to find one order by some filter.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns order object.
 */
export async function getOrder(ctx) {
  let order = await orderRepository.getOrder(ctx.params.id);
  ctx.body = {
    message: 'successfully found',
    order: order
  }

}

/**
 * Asyncronous function to update one order by id.
 * @param { Request } ctx ctx HTTP context, request and response objescts into a single object.
 * @returns retruns confirmation of success.
 */
export async function updateOrder(ctx, next) {

  let order = await orderRepository.updateOrder(ctx.request.body.order,ctx.params.id);

  ctx.body = {
    message: 'successfully updated',
    order: order
  }
  if(next)
    return next();
}

/**
 * Asyncronous function to delete one order by id.
 * @param { Request } ctx ctx HTTP context, request and response objescts into a single object.
 * @returns retruns confirmation of success.
 */
export async function deleteOrder(ctx) {

  const order = orderRepository.deleteOrder(ctx.params.id);

  ctx.body = {
    message: 'successfully deleted',
    order: order
  }

}