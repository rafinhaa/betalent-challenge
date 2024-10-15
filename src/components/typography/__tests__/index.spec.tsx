import { render, screen } from "@testing-library/react-native"

import Typography from "../index"

describe("Typography", () => {
  it("should render", () => {
    render(<Typography>Olá, mundo!</Typography>)

    expect(screen.getByText("Olá, mundo!")).toBeTruthy()

    expect(screen.getByText("Olá, mundo!")).toHaveStyle({
      fontFamily: "Helvetica-Medium",
      fontSize: 20,
      lineHeight: 24.42,
    })
  })

  describe("Heading", () => {
    it("should render h1", () => {
      render(
        <Typography heading="h1" testID="h1">
          Olá, mundo!
        </Typography>,
      )

      expect(screen.getByTestId("h1")).toHaveStyle({
        fontFamily: "Helvetica-Medium",
        fontSize: 20,
        lineHeight: 24.42,
      })
    })

    it("should render h2", () => {
      render(
        <Typography heading="h2" testID="h2">
          Olá, mundo!
        </Typography>,
      )

      expect(screen.getByTestId("h2")).toHaveStyle({
        fontFamily: "Helvetica-Medium",
        fontSize: 16,
        lineHeight: 19.54,
      })
    })

    it("should render h3", () => {
      render(
        <Typography heading="h3" testID="h3">
          Olá, mundo!
        </Typography>,
      )

      expect(screen.getByTestId("h3")).toHaveStyle({
        fontFamily: "Helvetica-Regular",
        fontSize: 16,
        lineHeight: 19.09,
      })
    })
  })
})
