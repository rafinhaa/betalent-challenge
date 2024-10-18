import { Employee } from "@/@types/employee"

type FilterOptions = {
  [K in keyof Omit<Employee, "id">]?: boolean
}

const initialFilters = {
  job: true,
  name: true,
  phone: true,
}

const shouldFilterByProperty = (
  property: string,
  search: string,
): boolean | undefined => {
  return property.toLowerCase().includes(search.toLowerCase())
}

const filterEmployee = (
  employee: Employee,
  search: string,
  filters: FilterOptions,
): boolean => {
  return Object.entries(filters).some(([key, value]) => {
    if (value && employee[key as keyof FilterOptions]) {
      return shouldFilterByProperty(
        employee[key as keyof FilterOptions],
        search,
      )
    }
    return false
  })
}

export const filterEmployees = (employees: Employee[]) => {
  return (search: string) => {
    return (filters: FilterOptions = initialFilters) => {
      return employees.filter((employee) =>
        filterEmployee(employee, search, filters),
      )
    }
  }
}
