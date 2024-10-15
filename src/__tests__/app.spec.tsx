import { render, screen } from "@/utils/tests"

import App from "../../App"

describe("App", () => {
  it("should be to able to render correctly", () => {
    render(<App />)
    expect(
      screen.getByText(
        "Abra o App dot js para começar a trabalhar na sua aplicação!",
      ),
    ).toBeTruthy()
  })
})
