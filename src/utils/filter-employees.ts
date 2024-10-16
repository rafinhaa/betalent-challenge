import { Employee } from "@/@types/employee"

export const filterEmployees = (employees: Employee[], value: string) => {
  return employees.filter((employee) => {
    const searchTerm = value.toLowerCase()
    const fieldsToCheck = [employee.name, employee.job, employee.phone]

    return fieldsToCheck.some((field) =>
      field.toLowerCase().includes(searchTerm),
    )
  })
}
