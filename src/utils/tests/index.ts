import { default as resources } from "@/locales/resources/ptBR/index.json"
import {
  HttpClient,
  HttpClientParams,
  HttpResponse,
} from "@/services/api/types"

export * from "@testing-library/react-native"
export { resources }

type FakeApiDataParams<T> = {
  data: T
  statusCode?: number
  errorMessage?: string
}

export const makeFakeApiData = <T>({
  data,
  statusCode = 200,
  errorMessage,
}: FakeApiDataParams<T>): HttpClient => ({
  get: async <T>(_props: HttpClientParams): Promise<HttpResponse<T>> => {
    if (errorMessage) {
      return Promise.reject({
        statusCode,
        body: {
          error: errorMessage,
        },
      } as any)
    }

    return {
      statusCode,
      body: data,
    } as any
  },
})
