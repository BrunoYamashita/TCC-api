import { ensureUser } from '../../middleware/validators'
import * as supplier from './service'
export const baseUrl = '/suppliers'

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
        supplier.createSupplier
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
      supplier.findSuppliers
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      supplier.getSupplier
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      ensureUser,
      supplier.updateSupplier
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      ensureUser,
      supplier.deleteSupplier
    ]
  }
]
