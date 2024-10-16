import { Text } from "react-native"

import { render, resources, screen } from "@/utils/tests"

import RenderEmployees from "../"

describe("RenderEmployees", () => {
  it("should be able to render correctly", () => {
    render(
      <RenderEmployees
        data={[{ data: "data" }]}
        loading={false}
        error={false}
        renderData={(data) => <Text>{data[0].data}</Text>}
      />,
    )

    expect(screen.getByText("data")).toBeTruthy()
  })

  it("should be able to render correctly with loading", () => {
    render(
      <RenderEmployees
        data={[{ data: "data" }]}
        loading={true}
        error={false}
        renderLoading={() => <Text>{resources.loading}</Text>}
        renderData={(data) => <Text>{data[0].data}</Text>}
      />,
    )

    expect(screen.getByText(resources.loading)).toBeTruthy()
  })

  it("should be able to render correctly with loading", () => {
    render(
      <RenderEmployees
        data={[{ data: "data" }]}
        loading={false}
        error={true}
        renderError={() => <Text>{resources.error}</Text>}
        renderLoading={() => <Text>{resources.loading}</Text>}
        renderData={(data) => <Text>{data[0].data}</Text>}
      />,
    )

    expect(screen.getByText(resources.error)).toBeTruthy()
  })
})
