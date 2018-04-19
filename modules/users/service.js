import * as userRepository from './repository';
import { User } from '../../models/users'

/**
 * Asyncronous function to create and user in the aplication.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns a message of sucess and user object.
 * 
 */
export async function createUser(ctx) {
  console.log(ctx.request.body);
  
  let user = await userRepository.createUser(ctx.request.body.user);

  ctx.body = {
    message: 'Sucessfuly found',
    user: user
  }
}

/**
 * Asyncronous function to find users.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns user list.
 */
export async function findUsers(ctx) {
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

  const user = await userRepository.findUsers(params, {
    skip,
    limit
  });

  ctx.body = {
    message: 'Sucessfuly found',
    user: user
  }
}

/**
 * Asyncronous function to find one user by some filter.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns user object.
 */
export async function getUser(ctx) {
  let user = await userRepository.getUser(ctx.params.id);
  ctx.body = {
    message: 'Sucessfuly found',
    user: user
  }

}

export async function updateUser(ctx) {

  let user = await userRepository.updateUser(ctx.request.body.user);

  ctx.body = {
    message: 'Sucessfuly updated',
    user: User
  }

}

export async function deleteUser(ctx) {

  let user = ctx.request.body.user;

  user = userRepository.deleteUser(user);

  ctx.body = {
    message: 'Sucessfuly deleted',
    user: user
  }

}

