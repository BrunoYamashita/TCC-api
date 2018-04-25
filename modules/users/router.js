import { ensureUser } from '../../middleware/validators'
import * as users from './service'
export const baseUrl = '/users'

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
      users.create
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      ensureUser,
      users.findById
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
        ensureUser,
        users.find,
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      ensureUser,
      users.update,
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      ensureUser,
      users.deleteOne
    ]
  }
]
