import { render, screen } from "@testing-library/react-native"

import TableInfo from ".."

describe("TableInfo", () => {
  it("should render correctly", () => {
    render(<TableInfo label="Olá" value="mundo!" />)

    expect(screen.getByText("Olá")).toBeTruthy()
    expect(screen.getByText("mundo!")).toBeTruthy()
  })
})
