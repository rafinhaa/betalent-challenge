export enum HttpStatusCode {
  ok = 200,
  badRequest = 400,
  notFound = 404,
  serverError = 500,
}

export type HttpClientParams = {
  url: string
  params?: PaginateParams
  signal?: AbortSignal
}

export type PaginateParams = {
  limit?: number
  page?: number
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body: T
}

export interface HttpClient {
  get: <T>(data: HttpClientParams) => Promise<HttpResponse<T>>
}
