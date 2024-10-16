import { render, resources, screen } from "@/utils/tests"

import TryAgain from "../"

describe("TryAgain", () => {
  it("should be able to render correctly", () => {
    render(<TryAgain />)

    expect(screen.getByText(resources.error)).toBeTruthy()
    expect(screen.getByText(resources.tryAgain)).toBeTruthy()
  })
})
