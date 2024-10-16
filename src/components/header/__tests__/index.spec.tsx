import { render, screen } from "@/utils/tests"

import Header from "../"

describe("Header", () => {
  it("should be able to render correctly", () => {
    render(<Header />)

    expect(screen.getByText("CG")).toBeTruthy()
    expect(screen.getByText("02")).toBeTruthy()
    expect(screen.getByTestId("bell-outline-icon")).toBeTruthy()
  })
})
