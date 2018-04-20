import { ensureClient } from '../../middleware/validators'
// import * as clients from './service'
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
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
        ensureClient,
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      ensureClient,
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      ensureClient,
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      ensureClient,
    ]
  }
]
