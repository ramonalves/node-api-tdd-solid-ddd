import { loginPath } from './paths'
import { accountSchema, errorSchema, loginParamsSchema } from './schemas'
import { badRequest, serverError, unauthorized, notFound } from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Node API Clean Architecture',
    description: 'API para realizar enquetes entre programadores',
    version: '1.0.0'
  },
  licence: {
    name: 'ISC',
    url: 'https://www.isc.org/'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema
  },
  components: {
    badRequest,
    serverError,
    unauthorized,
    notFound
  }
}
