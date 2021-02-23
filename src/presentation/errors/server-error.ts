export class ServerError extends Error {
  constructor () {
    super('Interval server error')
    this.name = 'ServerError'
  }
}
