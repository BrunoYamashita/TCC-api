import * as auth from './service'
export const baseUrl = '/auth'

/**
 * Exports 
 * 1- Method: HTTP Request type e.g Post
 * 2- Route: baseUrl + route of acess e.g url/auth/login
 * 3 Hadlers: Functions to be executed in this route
 */
export default [{
    method: 'POST',
    route: '/admin/login',
    handlers: [
      auth.authUser
    ]
  },
  {
    method: 'POST',
    route: '/login',
    handlers: [
      auth.authClient
    ]
  }
]
