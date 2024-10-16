import { createContext, ReactNode, useContext } from "react"

import { HttpClient } from "@/services/api/types"

interface ApiContextType {
  api: HttpClient
}

type ApiProviderProps = {
  children: ReactNode
  api: HttpClient
}

const ApiContext = createContext<ApiContextType | undefined>(undefined)

export function ApiProvider({ children, api }: ApiProviderProps) {
  return <ApiContext.Provider value={{ api }}>{children}</ApiContext.Provider>
}

export function useApi() {
  const context = useContext(ApiContext)
  if (!context) {
    throw new Error("useApi must be used within a ApiProvider")
  }
  return context
}
