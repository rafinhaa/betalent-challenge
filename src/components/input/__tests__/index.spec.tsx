import { fireEvent, render, resources, screen } from "@/utils/tests"

import Input from "../"

describe("Input", () => {
  it("should be able to render correctly", () => {
    render(<Input testID="input" placeholder={resources.search} />)

    expect(screen.getByTestId("input")).toBeTruthy()
    expect(screen.getByPlaceholderText(resources.search)).toBeTruthy()

    expect(screen.getByTestId("magnify-icon")).toBeTruthy()
  })

  it("should be able to clear input", () => {
    render(<Input testID="input" placeholder={resources.search} />)

    const input = screen.getByTestId("input")

    fireEvent.changeText(input, "test")
    expect(input.props.value).toBe("test")

    fireEvent(screen.getByTestId("close-icon"), "onPress")
    expect(input.props.value).toBe("")
  })

  it("should be able to render another icon", () => {
    render(
      <Input testID="input" placeholder={resources.search} icon="calendar" />,
    )

    expect(screen.getByTestId("calendar-icon")).toBeTruthy()
  })
})
