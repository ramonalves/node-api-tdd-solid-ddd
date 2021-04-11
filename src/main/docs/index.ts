import { loginPath, surveyPath } from './paths'
import { accountSchema, apiKeyAuthSchema, errorSchema, loginParamsSchema, surveyAnswerSchema, surveySchema, surveysSchema } from './schemas'
import { badRequest, serverError, unauthorized, notFound, forbidden } from './components'

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
  }, {
    name: 'Enquete'
  }],
  paths: {
    '/login': loginPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    serverError,
    unauthorized,
    notFound,
    forbidden
  }
}
