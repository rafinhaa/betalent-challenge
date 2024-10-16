import { useCallback, useEffect, useState } from "react"

import { Employee } from "@/@types/employee"
import { useApi } from "@/context/api"
import { getEmployees } from "@/services/employees"

type FetchParams = {
  signal: AbortSignal
}

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [loadingEmployees, setLoadingEmployees] = useState(true)
  const [errorEmployees, setErrorEmployees] = useState(false)

  const { api } = useApi()

  const fetch = useCallback(
    async ({ signal }: FetchParams) => {
      try {
        setLoadingEmployees(true)
        const data = await getEmployees({
          api,
          signal,
        })

        setEmployees(data)
      } catch {
        setErrorEmployees(true)
      } finally {
        setLoadingEmployees(false)
      }
    },
    [api],
  )

  useEffect(() => {
    const abortController = new AbortController()

    fetch({ signal: abortController.signal })

    return () => abortController.abort()
  }, [api, fetch])

  return {
    employees,
    errorEmployees,
    loadingEmployees,
    getEmployees,
  }
}
