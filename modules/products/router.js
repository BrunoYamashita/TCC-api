import { ensureUser } from '../../middleware/validators'
import * as products from './service'
export const baseUrl = '/products'

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
        products.create
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
      products.find
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      products.findOne
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      ensureUser,
      products.update
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      ensureUser,
      products.DeleteOne
    ]
  }
]
