import { Employee } from "@/@types/employee"
import { fireEvent, render, resources, screen } from "@/utils/tests"

import TableRow from ".."

const data: Employee = {
  id: 1,
  name: "João",
  job: "Back-end",
  admission_date: "2019-12-02T00:00:00.000Z",
  phone: "5551234567890",
  image: "",
}

describe("TableRow", () => {
  it("should render correctly", () => {
    render(<TableRow data={data} />)

    expect(screen.getByText(resources.job)).toBeTruthy()
    expect(screen.getByText(resources.admissionDate)).toBeTruthy()
    expect(screen.getByText(resources.phone)).toBeTruthy()

    expect(screen.getByText(data.name)).toBeTruthy()
    expect(screen.getByText(data.job)).toBeTruthy()
    expect(screen.getByText(data.admission_date)).toBeTruthy()
    expect(screen.getByText(data.phone)).toBeTruthy()
  })

  it("should be to able to call toggle", () => {
    render(<TableRow data={data} />)

    fireEvent.press(screen.getByText(data.name))

    expect(screen.getByText(data.name)).toBeTruthy()
  })
})
