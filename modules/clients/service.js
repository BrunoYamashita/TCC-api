import * as clientRepository from './repository';

/**
 * Asyncronous function to create and client in the aplication.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns a message of sucess and client object.
 * 
 */
export async function create(ctx) {
  console.log(ctx.request.body);
  
  let client = await clientRepository.create(ctx.request.body.client);

  ctx.body = {
    message: 'successfully found',
    client: client
  }
}

/**
 * Asyncronous function to find clients.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns client list.
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

  const client = await clientRepository.find(params, {
    skip,
    limit
  });

  ctx.body = {
    message: 'successfully found',
    client: client
  }
}

/**
 * Asyncronous function to find one client by some filter.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns client object.
 */
export async function findOne(ctx) {
  let client = await clientRepository.findOne(ctx.params.id);
  ctx.body = {
    message: 'successfully found',
    client: client
  }

}

/**
 * Find clients by its name
 * @param {Request} ctx HTTP context, request and response objescts into a single object.
 * @returns retruns client object.
 */
export async function findByUsername(ctx) {
  let client = await clientRepository.findByUsername(ctx.request.query.clientname);
  ctx.body = {
    message: 'successfully found',
    client: client
  }

}

/**
 * Update a client by its Id
 * @param {*} ctx HTTP context, request and response objescts into a single object.
 * @returns retruns client object.
 */
export async function update(ctx) {

  let client = await clientRepository.update(ctx.params.id, ctx.request.body.client);

  ctx.body = {
    message: 'successfully updated',
    client: client
  }

}

/**
 * Delete a client by its id
 * @param {*} ctx HTTP context, request and response objescts into a single object.
 * @returns success message
 */
export async function deleteOne(ctx) {

  client = clientRepository.deleteOne(ctx.params.id);

  ctx.body = {
    message: 'successfully deleted',
    client: client
  }

}

