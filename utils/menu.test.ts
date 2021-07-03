import { formatMenu } from "./menu"
import { fullProducts, fullProductsSorted } from "./mocks"

describe("formatMenu", () => {
  it("should return formatted object of menu, even when source is empty", () => {
    expect(formatMenu(fullProducts)).toEqual(fullProductsSorted)
  })
})
