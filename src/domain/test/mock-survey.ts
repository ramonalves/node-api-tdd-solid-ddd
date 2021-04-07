import { SurveyModel } from '@/data/usecases/survey/load-survey-by-id/db-load-survey-by-id-protocols'

export const mockSurveyModel = (): SurveyModel => {
  return {
    id: 'any_id',
    question: 'any_question',
    answers: [{
      image: 'any_image',
      answer: 'any_answer'
    }],
    date: new Date()
  }
}

export const mockSurveysModels = (): SurveyModel[] => {
  return [{
    id: 'any_id',
    question: 'any_question',
    answers: [{
      image: 'any_image',
      answer: 'any_answer'
    }],
    date: new Date()
  }, {
    id: 'any_id_2',
    question: 'any_question_2',
    answers: [{
      image: 'any_image_2',
      answer: 'any_answer_2'
    }],
    date: new Date()
  }]
}
