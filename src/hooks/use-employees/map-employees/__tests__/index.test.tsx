import { EmployeeResponse } from "@/@types/employee"

import { formatEmployees, formatSingleEmployee } from ".."

const employeesResponse: EmployeeResponse[] = [
  {
    id: 1,
    name: "John Doe",
    job: "Developer",
    admission_date: "2019-12-02T00:00:00.000Z",
    phone: "5551234567890",
    image: "https://example.com/image.png",
  },
  {
    id: 2,
    name: "Jane Doe",
    job: "Designer",
    admission_date: "2020-03-12T00:00:00.000Z",
    phone: "5559876543210",
    image: "https://example.com/image.png",
  },
]

describe("mapEmployees", () => {
  describe("formatEmployees", () => {
    it("should be to able to format employees correctly", () => {
      expect(formatEmployees(employeesResponse)(formatSingleEmployee)).toEqual([
        {
          id: 1,
          name: "John Doe",
          job: "Developer",
          admissionDate: "02/12/2019",
          phone: "+55 (51) 23456-7890",
          image: "https://example.com/image.png",
        },
        {
          id: 2,
          name: "Jane Doe",
          job: "Designer",
          admissionDate: "12/03/2020",
          phone: "+55 (59) 87654-3210",
          image: "https://example.com/image.png",
        },
      ])
    })
  })

  describe("formatSingleEmployee", () => {
    it("should be to able to format single employee correctly", () => {
      expect(formatSingleEmployee(employeesResponse[0])).toEqual({
        id: 1,
        name: "John Doe",
        job: "Developer",
        admissionDate: "02/12/2019",
        phone: "+55 (51) 23456-7890",
        image: "https://example.com/image.png",
      })
    })
  })
})
