import { renderHook } from "@testing-library/react-hooks"

import { COMPANY_DATA } from "../../constants/companyData"
import { useCompanyData } from "./useCompanyData"

describe("useCompanyData", () => {
  const companyData = COMPANY_DATA
  test("returns bookinStateContext value", async () => {
    const { result } = renderHook(() => useCompanyData())

    await expect(result.current.companyData).toEqual(companyData)
  })
})
