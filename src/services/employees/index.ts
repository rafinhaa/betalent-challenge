import { Employee } from "@/@types/employee"

import { HttpClient } from "../api/types"

type GetEmployeesParams = {
  signal: AbortSignal
  api: HttpClient
}

export const getEmployees = async ({ api, signal }: GetEmployeesParams) => {
  const { body } = await api.get<Employee[]>({
    url: `/employees`,
    signal: signal,
  })

  return body
}

export const employeesApi = {
  getEmployees,
}
