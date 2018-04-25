import * as supplierRepository from './repository';

/**
 * Asyncronous function to create and supplier in the aplication.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns a message of sucess and supplier object.
 * 
 */
export async function create(ctx) {

  let supplier = await supplierRepository.create(ctx.request.body.supplier);

  ctx.body = {
    message: 'successfully found',
    supplier: supplier
  }
}

/**
 * Asyncronous function to find suppliers.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns supplier list.
 */
export async function find(ctx) {
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

  const supplier = await supplierRepository.find(params, {
    skip,
    limit
  });

  ctx.body = {
    message: 'successfully found',
    supplier: supplier
  }
}

/**
 * Asyncronous function to find one supplier by some filter.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns supplier object.
 */
export async function findOne(ctx) {
  let supplier = await supplierRepository.findOne(ctx.params.id);
  ctx.body = {
    message: 'successfully found',
    supplier: supplier
  }

}

/**
 * Asyncronous function to update one supplier by id.
 * @param { Request } ctx ctx HTTP context, request and response objescts into a single object.
 * @returns retruns confirmation of success.
 */
export async function update(ctx, next) {

  let supplier = await supplierRepository.update(ctx.request.body.supplier,ctx.params.id);

  ctx.body = {
    message: 'successfully updated',
    supplier: supplier
  }
  if(next)
    return next();
}

/**
 * Asyncronous function to delete one supplier by id.
 * @param { Request } ctx ctx HTTP context, request and response objescts into a single object.
 * @returns retruns confirmation of success.
 */
export async function deleteOne(ctx) {

  const supplier = supplierRepository.deleteOne(ctx.params.id);

  ctx.body = {
    message: 'successfully deleted',
    supplier: supplier
  }

}