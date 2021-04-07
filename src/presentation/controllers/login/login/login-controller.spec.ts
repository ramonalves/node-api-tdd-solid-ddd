import { MissingParamError } from '@/presentation/errors'
import { badRequest, ok, serverError, unauthorized } from '@/presentation/helpers/http/http-helper'
import { HttpRequest, Authentication } from './login-controller-protocols'
import { LoginController } from './login-controller'
import { Validation } from '../signup/signup-controller-protocols'
import { mockAuthentication, mockValidation } from '@/presentation/test'

const mockRequest = (): HttpRequest => ({
  body: {
    email: 'any_email@mail.com',
    password: 'any_password'
  }
})

type SutTypes = {
  sut: LoginController
  authenticationStab: Authentication
  validationStub: Validation
}

const makeSut = (): SutTypes => {
  const validationStub = mockValidation()
  const authenticationStab = mockAuthentication()
  const sut = new LoginController(authenticationStab, validationStub)
  return {
    sut,
    authenticationStab,
    validationStub
  }
}

describe('Login Controller', () => {
  test('Should call Authentication with correct email', async () => {
    const { sut, authenticationStab } = makeSut()
    const authSpy = jest.spyOn(authenticationStab, 'auth')
    await sut.handle(mockRequest())
    expect(authSpy).toHaveBeenCalledWith({
      email: 'any_email@mail.com',
      password: 'any_password'
    })
  })

  test('Should return 401 if invalid credentials provided', async () => {
    const { sut, authenticationStab } = makeSut()
    jest.spyOn(authenticationStab, 'auth').mockReturnValueOnce(new Promise(resolve => resolve(null)))
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(unauthorized())
  })

  test('Should return 500 if Authentication throws', async () => {
    const { sut, authenticationStab } = makeSut()
    jest.spyOn(authenticationStab, 'auth').mockReturnValueOnce(
      new Promise((resolve, reject) => reject(new Error()))
    )
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should return 200 if valid credentials are provided', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok({ accessToken: 'any_token' }))
  })

  test('Should call Validation with correct value', async () => {
    const { sut, validationStub } = makeSut()
    const validateSpy = jest.spyOn(validationStub, 'validate')
    const request = mockRequest()
    await sut.handle(request)
    expect(validateSpy).toHaveBeenCalledWith(request.body)
  })

  test('Should return 400 if validation returns an error', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValueOnce(new MissingParamError('any_field'))
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(new MissingParamError('any_field')))
  })
})
