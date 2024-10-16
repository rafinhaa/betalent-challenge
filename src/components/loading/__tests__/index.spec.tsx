import { render, resources, screen } from "@/utils/tests"

import Loading from ".."

describe("Loading", () => {
  it("should be to able to render correctly", () => {
    render(<Loading />)

    expect(screen.getByText(resources.loading)).toBeTruthy()
  })

  it("should be to able to not render if loading is false", () => {
    render(<Loading loading={false} />)

    expect(screen.queryByText(resources.loading)).not.toBeTruthy()
  })

  it("should be to able to render if showLabel is false", () => {
    render(<Loading testID="loading" showLabel={false} />)

    expect(screen.getByTestId("loading")).toBeTruthy()
    expect(screen.queryByText(resources.loading)).not.toBeTruthy()
  })

  it("should be to able to render with another label", () => {
    render(<Loading label="test" />)

    expect(screen.getByText("test")).toBeTruthy()
  })
})
