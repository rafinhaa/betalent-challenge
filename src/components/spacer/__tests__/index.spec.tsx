import { render, screen } from "@testing-library/react-native"

import Spacer from ".."

describe("Spacer", () => {
  it("should render correctly", () => {
    render(<Spacer testID="spacer" size={20} />)

    expect(screen.getByTestId("spacer")).toBeTruthy()

    expect(screen.getByTestId("spacer")).toHaveStyle({
      height: 20,
    })
  })
})
