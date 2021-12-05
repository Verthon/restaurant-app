import { filterCategory } from "./menu"
import { fullProducts, appetizersMock, saladsMock } from "./mocks"

describe("filterCategory", () => {
  it("should return formatted appetizers list", () => {
    expect(filterCategory(fullProducts, 2)).toEqual(appetizersMock)
  })

  it("should return formatted salads list", () => {
    expect(filterCategory(fullProducts, 5)).toEqual(saladsMock)
  })
})
