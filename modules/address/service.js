import * as addressRepository from './repository';

export async function createAddress(ctx) {
  let address = await addressRepository.createAddress(ctx.params.id);

  ctx.body = {
    message:'successfully created',
    user:user
  }
}

export async function findAddress(ctx) {
    let address = await addressRepository.findAddress(ctx.params.id);

    ctx.body = {
      message:'successfully found',
      user:user
    }
}

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

export async function updateAddress(ctx) {
    let address = await addressRepository.updateAddress(ctx.request.body.user,ctx.params.id);

    ctx.body = {
      message: 'successfully updated',
      user: User
    }
}

export async function deleteAddress(ctx) {
  let address = await addressRepository.deleteAddress(ctx.params.id);

  ctx.body = {
    message: 'successfully updated',
    user: User
  }
}