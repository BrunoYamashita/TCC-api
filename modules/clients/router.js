import { ensureClient } from '../../middleware/validators'
import * as clients from './service'
export const baseUrl = '/clients'

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
        clients.create
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
        ensureClient,
        clients.find
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      ensureClient,
      clients.findOne
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      ensureClient,
      clients.update
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      ensureClient,
      clients.deleteOne
    ]
  }
]
