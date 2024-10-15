import { render, screen } from "@testing-library/react-native"

import Icon from "../"

describe("Icon", () => {
  describe("color", () => {
    it("primary", () => {
      render(<Icon name={"calendar"} />)

      expect(screen.getByTestId("calendar-icon")).toBeTruthy()
      expect(screen.getByTestId("calendar-icon")).toHaveProp("color", "#0500FF")
    })

    it("secondary", () => {
      render(<Icon name={"calendar"} color="secondary" />)

      expect(screen.getByTestId("calendar-icon")).toBeTruthy()
      expect(screen.getByTestId("calendar-icon")).toHaveProp("color", "#1C1C1C")
    })
  })

  describe("size", () => {
    it("should render md", () => {
      render(<Icon name={"calendar"} size="md" />)

      expect(screen.getByTestId("calendar-icon")).toHaveProp("size", 16)
    })

    it("should render lg", () => {
      render(<Icon name={"calendar"} size="lg" />)

      expect(screen.getByTestId("calendar-icon")).toHaveProp("size", 24)
    })

    it("should render sm", () => {
      render(<Icon name={"calendar"} size="xl" />)

      expect(screen.getByTestId("calendar-icon")).toHaveProp("size", 32)
    })

    it("should render size numeric", () => {
      render(<Icon name={"calendar"} size={24} />)

      expect(screen.getByTestId("calendar-icon")).toHaveProp("size", 24)
    })
  })
})
