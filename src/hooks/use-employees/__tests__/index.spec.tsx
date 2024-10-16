import { Employee } from "@/@types/employee"
import { ApiProvider } from "@/context/api"
import { makeFakeApiData, renderHook, waitFor } from "@/utils/tests"

import { useEmployees } from ".."

const data: Employee[] = [
  {
    id: 1,
    name: "John",
    job: "Developer",
    admission_date: "2020-01-01",
    phone: "123456789",
    image: "",
  },
]

describe("useEmployees", () => {
  it("should be to able to get employees", async () => {
    const fakeApi = makeFakeApiData({
      data,
      statusCode: 200,
    })

    const { result } = renderHook(() => useEmployees(), {
      wrapper: ({ children }) => (
        <ApiProvider api={fakeApi}>{children}</ApiProvider>
      ),
    })

    await waitFor(() => {
      expect(result.current).toBeDefined()
      expect(result.current.loadingEmployees).toBe(false)
      expect(result.current.employees).toEqual(data)
      expect(result.current.errorEmployees).toBe(false)
    })
  })

  it("should be to able to error on get employees", async () => {
    const fakeApi = makeFakeApiData({
      data: [],
      errorMessage: "Error",
      statusCode: 500,
    })

    const { result } = renderHook(() => useEmployees(), {
      wrapper: ({ children }) => (
        <ApiProvider api={fakeApi}>{children}</ApiProvider>
      ),
    })

    await waitFor(() => {
      expect(result.current).toBeDefined()
      expect(result.current.loadingEmployees).toBe(false)
      expect(result.current.employees).toEqual([])
      expect(result.current.errorEmployees).toBe(true)
    })
  })
})
