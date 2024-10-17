import { Text } from "react-native"

import { render, resources, screen } from "@/utils/tests"

import RenderEmployees from "../"

describe("RenderEmployees", () => {
  it("should be able to render correctly", () => {
    render(
      <RenderEmployees
        options={{
          loading: false,
          error: false,
          data: [{ data: "data" }],
        }}
        renderData={(data) => <Text>{data[0].data}</Text>}
      />,
    )

    expect(screen.getByText("data")).toBeTruthy()
  })

  it("should be able to render correctly with loading", () => {
    render(
      <RenderEmployees
        options={{
          loading: true,
          error: false,
          data: [{ data: "data" }],
        }}
        renderLoading={() => <Text>{resources.loading}</Text>}
        renderData={(data) => <Text>{data[0].data}</Text>}
      />,
    )

    expect(screen.getByText(resources.loading)).toBeTruthy()
  })

  it("should be able to render correctly with loading", () => {
    render(
      <RenderEmployees
        options={{
          loading: false,
          error: true,
          data: [{ data: "data" }],
        }}
        renderError={() => <Text>{resources.error}</Text>}
        renderLoading={() => <Text>{resources.loading}</Text>}
        renderData={(data) => <Text>{data[0].data}</Text>}
      />,
    )

    expect(screen.getByText(resources.error)).toBeTruthy()
  })
})
