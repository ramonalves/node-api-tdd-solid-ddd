import { Router } from 'express'
import { adaptMiddleware } from '../adapters/express-middleware-adapter'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAddSurveyController } from '../factories/controllers/survey/add-survey/add-survey-controller-factory'
import { makeLoadSurveysController } from '../factories/controllers/survey/load-surveys/load-surveys-controller-factory'
import { makeAuthMiddleware } from '../factories/middlewares/auth-middleware-factory'

export default (router: Router): void => {
  router.post(
    '/surveys',
    adaptMiddleware(makeAuthMiddleware('admin')),
    adaptRoute(makeAddSurveyController())
  )

  router.get(
    '/surveys',
    adaptMiddleware(makeAuthMiddleware()),
    adaptRoute(makeLoadSurveysController())
  )
}
