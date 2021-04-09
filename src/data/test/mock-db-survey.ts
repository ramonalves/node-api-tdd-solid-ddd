import { AddSurveyRepository } from '@/data/protocols/db/survey/add-survey-repository'
import { SurveyModel } from '@/domain/models/survey'
import { mockSurveyModel, mockSurveysModels } from '@/domain/test'
import { AddSurveyParams } from '@/domain/usecases/survey/add-survey'
import { LoadSurveysRepository } from '../protocols/db/survey/load-surveys-repository'
import { LoadSurveyByIdRepository } from '../protocols/db/survey/load-surveys-repository-by-id'

export const mockAddSurveyRepository = (): AddSurveyRepository => {
  class AddSurveyRepositoryStub implements AddSurveyRepository {
    async add (surveyData: AddSurveyParams): Promise<void> {
      return await new Promise(resolve => resolve())
    }
  }
  return new AddSurveyRepositoryStub()
}

export const mockLoadSurveyByIdRepository = (): LoadSurveyByIdRepository => {
  class LoadSurveyByIdRepositoryStub implements LoadSurveyByIdRepository {
    async loadById (id: string): Promise<SurveyModel> {
      return await new Promise(resolve => resolve(mockSurveyModel()))
    }
  }
  return new LoadSurveyByIdRepositoryStub()
}

export const mockLoadSurveysRepository = (): LoadSurveysRepository => {
  class LoadSurveysRepositoryStub implements LoadSurveysRepository {
    async loadAll (): Promise<SurveyModel[]> {
      return await new Promise(resolve => resolve(mockSurveysModels()))
    }
  }
  return new LoadSurveysRepositoryStub()
}