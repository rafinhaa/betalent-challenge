import { fireEvent, render, screen } from "@/utils/tests"

import FeedbackCard from "../"

describe("FeedbackCard ", () => {
  it("should be able to render correctly", () => {
    render(<FeedbackCard message="error" buttonLabel="tryAgain" />)

    expect(screen.getByText("error")).toBeTruthy()
    expect(screen.getByText("tryAgain")).toBeTruthy()
  })

  it("should be able to call onPress", () => {
    const onPress = jest.fn()

    render(
      <FeedbackCard message="error" buttonLabel="tryAgain" onPress={onPress} />,
    )

    fireEvent(screen.getByText("tryAgain"), "onPress")
    expect(onPress).toHaveBeenCalledTimes(1)
  })
})
