import { Employee } from "@/@types/employee"

import { filterEmployees } from "../filter-employees"

describe("filterEmployees", () => {
  it("should return empty array when employees array is empty", () => {
    const employees: Employee[] = []
    const value = "searchTerm"
    expect(filterEmployees(employees, value)).toEqual([])
  })

  it("should return empty array when no employees match the search term", () => {
    const employees: Employee[] = [
      {
        id: 1,
        name: "John",
        job: "Developer",
        admissionDate: "2020-01-01",
        phone: "123456789",
        image: "",
      },
      {
        id: 2,
        name: "Jane",
        job: "Designer",
        admissionDate: "2020-01-02",
        phone: "123456789",
        image: "",
      },
    ]
    const value = "non-existent"
    expect(filterEmployees(employees, value)).toEqual([])
  })

  it("should return employees that match the search term by name", () => {
    const employees: Employee[] = [
      {
        id: 1,
        name: "John",
        job: "Developer",
        admissionDate: "2020-01-01",
        phone: "123456789",
        image: "",
      },
      {
        id: 2,
        name: "Jane",
        job: "Designer",
        admissionDate: "2020-01-02",
        phone: "123456789",
        image: "",
      },
    ]
    const value = "John"
    expect(filterEmployees(employees, value)).toEqual([employees[0]])
  })

  it("should return employees that match the search term by job", () => {
    const employees: Employee[] = [
      {
        id: 1,
        name: "John",
        job: "Developer",
        admissionDate: "2020-01-01",
        phone: "123456789",
        image: "",
      },
      {
        id: 2,
        name: "Jane",
        job: "Designer",
        admissionDate: "2020-01-02",
        phone: "123456789",
        image: "",
      },
    ]
    const value = "Developer"
    expect(filterEmployees(employees, value)).toEqual([employees[0]])
  })

  it("should return employees that match the search term by phone", () => {
    const employees: Employee[] = [
      {
        id: 1,
        name: "John",
        job: "Developer",
        admissionDate: "2020-01-01",
        phone: "123456780",
        image: "",
      },
      {
        id: 2,
        name: "Jane",
        job: "Designer",
        admissionDate: "2020-01-02",
        phone: "123456789",
        image: "",
      },
    ]
    const value = "123456780"
    expect(filterEmployees(employees, value)).toEqual([employees[0]])
  })

  it("should return employees that match multiple search terms", () => {
    const employees: Employee[] = [
      {
        id: 1,
        name: "John Developer",
        job: "Developer",
        admissionDate: "2020-01-01",
        phone: "123456789",
        image: "",
      },
      {
        id: 2,
        name: "Jane Designer",
        job: "Designer",
        admissionDate: "2020-01-02",
        phone: "123456789",
        image: "",
      },
    ]
    const value = "Developer"
    expect(filterEmployees(employees, value)).toEqual([employees[0]])
  })
})
