import * as clientRepository from './repository';
import { Client } from '../../models/clients'

/**
 * Asyncronous function to create and client in the aplication.
 * @private
 * @param { Request } ctx HTTP context, request and response objescts into a single object.
 * @returns retruns a message of sucess and client object.
 * 
 */
export async function createClient(ctx) {
  console.log(ctx.request.body);
  
  let client = await clientRepository.createClient(ctx.request.body.client);

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
export async function findClients(ctx) {
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

  const client = await clientRepository.findClients(params, {
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
export async function getClient(ctx) {
  let client = await clientRepository.getClient(ctx.params.id);
  ctx.body = {
    message: 'successfully found',
    client: client
  }

}

export async function getClientByClientname(ctx) {
  let client = await clientRepository.getClientByClientname(ctx.request.query.clientname);
  ctx.body = {
    message: 'successfully found',
    client: client
  }

}

export async function updateClient(ctx) {

  let client = await clientRepository.updateClient(ctx.request.body.client);

  ctx.body = {
    message: 'successfully updated',
    client: Client
  }

}

export async function deleteClient(ctx) {

  client = clientRepository.deleteClient(ctx.params.id);

  ctx.body = {
    message: 'successfully deleted',
    client: client
  }

}

