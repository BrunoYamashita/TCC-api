import { ensureUser } from '../../middleware/validators'
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
        ensureUser,
        address.createAddress
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
        ensureUser,
        address.findAddresses
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      ensureUser,
      address.findAddress
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      ensureUser,
      address.updateAddress
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      ensureUser,
      address.deleteAddress
    ]
  }
]
