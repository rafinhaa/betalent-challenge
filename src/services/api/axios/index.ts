import axios from "axios"

import { HttpClient, HttpClientParams } from "../types"

const api = axios.create({
  baseURL: "http://localhost:3000",
})

export class Axios implements HttpClient {
  get = async <T>({ url, params, signal }: HttpClientParams) => {
    const response = await api.get<T>(url, { params, signal })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }
}
