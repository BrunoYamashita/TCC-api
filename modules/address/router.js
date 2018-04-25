import { ensureClient } from '../../middleware/validators'
import * as address from './service'
export const baseUrl = '/address'

/**
 * Exports 
 * 1- Method: HTTP Request type e.g Post
 * 2- Route: baseUrl + route of acess e.g url/auth/login
 * 3 Hadlers: Functions to be executed in this route
 */
export default [
  {
    method: 'POST',
    route: '/',
    handlers: [
        ensureClient,
        address.create
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
        ensureClient,
        address.find
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      ensureClient,
      address.findOne
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      ensureClient,
      address.update
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      ensureClient,
      address.deleteOne
    ]
  }
]
