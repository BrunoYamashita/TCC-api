import * as addressRepository from './repository';

/**
 * Create an address
 * @param {Request} ctx  HTTP context, request and response objescts into a single object.
 * @returns Address object and confirmation
 */
export async function createAddress(ctx) {
  let address = await addressRepository.createAddress(ctx.params.id);

  ctx.body = {
    message:'successfully created',
    user:user
  }
}

/**
 * Find an address
 * @param {Request} ctx  HTTP context, request and response objescts into a single object.
 * @returns Array of addresses
 */
export async function findAddress(ctx) {
    let address = await addressRepository.findAddress(ctx.params.id);

    ctx.body = {
      message:'successfully found',
      user:user
    }
}

/**
 * Find Adresses
 * @param {Request} ctx  HTTP context, request and response objescts into a single object.
 * @returns One object of address
 */
export async function findAddresses(ctx) {

  let params = Object.assign({}, ctx.query);

  let limit = 0,
      skip = 0;

  if (params.limit) {
    limit = parseInt(params.limit);
    delete params.limit;
  }

  if (params.skip) {
    skip = parseInt(params.skip);
    delete params.skip;
  }

  let address = await addressRepository.findAddresses(query);

  ctx.body = {
    message:'successfully found',
    user:user
  }
}

/**
 * Find and update an address
 * @param {Request} ctx  HTTP context, request and response objescts into a single object.
 * @returns object of address and confirmation
 */
export async function updateAddress(ctx) {
    let address = await addressRepository.updateAddress(ctx.request.body.user,ctx.params.id);

    ctx.body = {
      message: 'successfully updated',
      user: User
    }
}

/**
 * Delete One address
 * @param {Request} ctx HTTP context, request and response objescts into a single object.
 * @returns Confirmation
 */
export async function deleteAddress(ctx) {
  let address = await addressRepository.deleteAddress(ctx.params.id);

  ctx.body = {
    message: 'successfully updated',
    user: User
  }
}