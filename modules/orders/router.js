import { ensureClient } from '../../middleware/validators'
import * as order from './service'
export const baseUrl = '/orders'

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
        order.create
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
        ensureClient,
        order.find
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      ensureClient,
      order.findOne
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      ensureClient,
      order.update
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      ensureClient,
      order.DeleteOne
    ]
  }
]
