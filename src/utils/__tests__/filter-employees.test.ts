import { Employee } from "@/@types/employee"

import { filterEmployees } from "../filter-employees"

describe("filterEmployees", () => {
  describe("search", () => {
    it("should return empty array when employees array is empty", () => {
      const employees: Employee[] = []
      const search = "searchTerm"
      expect(filterEmployees(employees)(search)()).toEqual([])
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
      const search = "non-existent"
      expect(filterEmployees(employees)(search)()).toEqual([])
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
      const search = "John"
      expect(filterEmployees(employees)(search)()).toEqual([employees[0]])
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
      const search = "Developer"
      expect(filterEmployees(employees)(search)()).toEqual([employees[0]])
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
      const search = "123456780"
      expect(filterEmployees(employees)(search)()).toEqual([employees[0]])
    })

    it("should return multiple matching employees", () => {
      const employees: Employee[] = [
        {
          id: 1,
          name: "John",
          job: "Developer",
          phone: "123456789",
          image: "",
          admissionDate: "2020-01-01",
        },
        {
          id: 2,
          name: "Jane",
          job: "Developer",
          phone: "987654321",
          image: "",
          admissionDate: "2020-01-02",
        },
      ]
      const search = "Developer"
      expect(filterEmployees(employees)(search)()).toEqual(employees)
    })
  })

  describe("filters", () => {
    it("should return employees with name", () => {
      const employees: Employee[] = [
        {
          id: 1,
          name: "John",
          job: "Developer",
          phone: "123456789",
          image: "",
          admissionDate: "2020-01-01",
        },
        {
          id: 2,
          name: "Jane",
          job: "Designer",
          phone: "987654321",
          image: "",
          admissionDate: "2020-01-02",
        },
        {
          id: 3,
          name: "Bob",
          job: "Manager",
          phone: "555555555",
          image: "",
          admissionDate: "2020-01-01",
        },
      ]
      const search = "o"
      const filters = { name: true }
      expect(filterEmployees(employees)(search)(filters)).toEqual([
        employees[0],
        employees[2],
      ])
    })

    it("should return employees with job", () => {
      const employees: Employee[] = [
        {
          id: 1,
          name: "John Developer",
          job: "Developer",
          phone: "123456789",
          image: "",
          admissionDate: "2020-01-01",
        },
        {
          id: 2,
          name: "Jane",
          job: "Designer",
          phone: "987654321",
          image: "",
          admissionDate: "2020-01-02",
        },
        {
          id: 3,
          name: "Bob",
          job: "Manager",
          phone: "555555555",
          image: "",
          admissionDate: "2020-01-01",
        },
      ]
      const search = "De"
      const filters = { job: true }
      expect(filterEmployees(employees)(search)(filters)).toEqual([
        employees[0],
        employees[1],
      ])
    })

    it("should return employees with phone", () => {
      const employees: Employee[] = [
        {
          id: 1,
          name: "John",
          job: "Developer",
          phone: "123456789",
          image: "",
          admissionDate: "2020-01-01",
        },
        {
          id: 2,
          name: "Jane",
          job: "Designer",
          phone: "987654321",
          image: "",
          admissionDate: "2020-01-02",
        },
        {
          id: 3,
          name: "Bob",
          job: "Manager",
          phone: "555555555",
          image: "",
          admissionDate: "2020-01-01",
        },
      ]
      const search = "5555"
      const filters = { phone: true }
      expect(filterEmployees(employees)(search)(filters)).toEqual([
        employees[2],
      ])
    })

    it("should return empty array when no employees match the filters", () => {
      const employees: Employee[] = [
        {
          id: 1,
          name: "John",
          job: "Developer",
          phone: "123456789",
          image: "",
          admissionDate: "2020-01-01",
        },
        {
          id: 2,
          name: "Bob",
          job: "Manager",
          phone: "555555555",
          image: "",
          admissionDate: "2020-01-01",
        },
      ]
      const search = "5555"
      const filters = { name: true }
      expect(filterEmployees(employees)(search)(filters)).toEqual([])
    })

    it("should return empty array when use wrong filters", () => {
      const employees: Employee[] = [
        {
          id: 1,
          name: "John",
          job: "Developer",
          phone: "123456789",
          image: "",
          admissionDate: "2020-01-01",
        },
        {
          id: 2,
          name: "Bob",
          job: "Manager",
          phone: "555555555",
          image: "",
          admissionDate: "2020-01-01",
        },
      ]
      const search = "Bob"
      const filters = { another: true } as any
      expect(filterEmployees(employees)(search)(filters)).toEqual([])
    })
  })
})
