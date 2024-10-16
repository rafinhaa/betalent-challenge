import { render, resources, screen } from "@/utils/tests"

import TableHeader from ".."

describe("TableHeader", () => {
  it("should render correctly", () => {
    render(<TableHeader />)

    expect(screen.getByText(resources.photo)).toBeTruthy()
    expect(screen.getByText(resources.name)).toBeTruthy()

    expect(screen.getByTestId("circle")).toBeTruthy()
  })
})
