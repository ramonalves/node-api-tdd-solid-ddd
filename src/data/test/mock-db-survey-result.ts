import { SurveyResultModel } from '@/domain/models/survey-result'
import { mockSurveyResultModel } from '@/domain/test'
import { SaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'
import { SaveSurveyResultRepository } from '@/data/protocols/db/survey-result/save-survey-result-repository'

export const makeSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return await new Promise(resolve => resolve(mockSurveyResultModel()))
    }
  }
  return new SaveSurveyResultRepositoryStub()
}
