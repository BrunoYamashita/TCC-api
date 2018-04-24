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
        products.createProduct
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
      products.findProducts
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      products.getProduct
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      ensureUser,
      products.updateProduct
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      ensureUser,
      products.deleteProduct
    ]
  }
]
