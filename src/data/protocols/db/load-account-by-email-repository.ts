import { AccountModel } from '../../../domain/models/account'

export interface LoadAccountByEmailRepository {
  loadEmail: (email: string) => Promise<AccountModel>
}
