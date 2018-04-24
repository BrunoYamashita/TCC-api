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
        order.createOrder
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
        ensureClient,
        order.findOrders
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      ensureClient,
      order.getOrder
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      ensureClient,
      order.updateOrder
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      ensureClient,
      order.deleteOrder
    ]
  }
]
