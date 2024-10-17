import format from "../format"

describe("format", () => {
  describe("phone", () => {
    it("should be to able to format phone correctly", () => {
      expect(format.phone("5551234567890")).toBe("+55 (51) 23456-7890")
    })
  })

  describe("date", () => {
    it("should be to able to format date correctly", () => {
      expect(format.date("2019-12-02T00:00:00.000Z")).toBe("02/12/2019")
    })
  })
})
