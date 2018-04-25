import { ensureClient } from '../../middleware/validators'
import * as cards from './service'
export const baseUrl = '/cards'

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
      cards.create
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      ensureClient,
      cards.findOne
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
        ensureClient,
        cards.find,
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      ensureClient,
      cards.update,
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      ensureClient,
      cards.deleteOne
    ]
  }
]
