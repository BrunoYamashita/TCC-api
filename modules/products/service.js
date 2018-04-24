import * as productRepository from './repository';

/**
 * Asyncronous function to create and product in the aplication.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns a message of sucess and product object.
 * 
 */
export async function createProduct(ctx) {

  let product = await productRepository.createProduct(ctx.request.body.product);

  ctx.body = {
    message: 'successfully found',
    product: product
  }
}

/**
 * Asyncronous function to find products.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns product list.
 */
export async function findProducts(ctx) {
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

  const product = await productRepository.findProducts(params, {
    skip,
    limit
  });

  ctx.body = {
    message: 'successfully found',
    product: product
  }
}

/**
 * Asyncronous function to find one product by some filter.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns product object.
 */
export async function getProduct(ctx) {
  let product = await productRepository.getProduct(ctx.params.id);
  ctx.body = {
    message: 'successfully found',
    product: product
  }

}

/**
 * Asyncronous function to update one product by id.
 * @param { Request } ctx ctx HTTP context, request and response objescts into a single object.
 * @returns retruns confirmation of success.
 */
export async function updateProduct(ctx, next) {

  let product = await productRepository.updateProduct(ctx.request.body.product,ctx.params.id);

  ctx.body = {
    message: 'successfully updated',
    product: product
  }
  if(next)
    return next();
}

/**
 * Asyncronous function to delete one product by id.
 * @param { Request } ctx ctx HTTP context, request and response objescts into a single object.
 * @returns retruns confirmation of success.
 */
export async function deleteProduct(ctx) {

  const product = productRepository.deleteProduct(ctx.params.id);

  ctx.body = {
    message: 'successfully deleted',
    product: product
  }

}