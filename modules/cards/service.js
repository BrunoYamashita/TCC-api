import * as cardRepository from './repository';

/**
 * Asyncronous function to create and user in the aplication.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns a message of sucess and user object.
 * 
 */
export async function createCard(ctx) {

  let user = await cardRepository.createCard(ctx.request.body.user);

  ctx.body = {
    message: 'successfully found',
    user: user
  }
}

/**
 * Asyncronous function to find users.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns user list.
 */
export async function findCards(ctx) {
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

  const user = await cardRepository.findCards(params, {
    skip,
    limit
  });

  ctx.body = {
    message: 'successfully found',
    user: user
  }
}

/**
 * Asyncronous function to find one user by some filter.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns user object.
 */
export async function getCard(ctx) {
  let user = await cardRepository.getCard(ctx.params.id);
  ctx.body = {
    message: 'successfully found',
    user: user
  }

}

/**
 * Asyncronous function to update one user by id.
 * @param { Request } ctx ctx HTTP context, request and response objescts into a single object.
 * @returns retruns confirmation of success.
 */
export async function updateCard(ctx, next) {

  let user = await cardRepository.updateCard(ctx.request.body.user,ctx.params.id);

  ctx.body = {
    message: 'successfully updated',
    user: user
  }
  if(next)
    return next();
}

/**
 * Asyncronous function to delete one user by id.
 * @param { Request } ctx ctx HTTP context, request and response objescts into a single object.
 * @returns retruns confirmation of success.
 */
export async function deleteCard(ctx) {

  const user = cardRepository.deleteCard(ctx.params.id);

  ctx.body = {
    message: 'successfully deleted',
    user: user
  }

}