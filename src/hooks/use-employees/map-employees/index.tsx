import { Employee, EmployeeResponse } from "@/@types/employee"
import format from "@/utils/format"

type FormatSingleEmployees = (employee: EmployeeResponse) => Employee

export const formatSingleEmployee = (employee: EmployeeResponse) => {
  const { admission_date, ...rest } = employee
  return {
    ...rest,
    admissionDate: format.date(admission_date),
    phone: format.phone(employee.phone),
  }
}

export const formatEmployees = (employees: EmployeeResponse[]) => {
  return (fn: FormatSingleEmployees) => employees.map(fn)
}
