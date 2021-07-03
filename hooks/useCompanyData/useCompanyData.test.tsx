import { renderHook } from "@testing-library/react-hooks"

import { COMPANY_DATA } from "../../constants/companyData"
import { useCompanyData } from "./useCompanyData"

describe("useCompanyData", () => {
  const companyData = COMPANY_DATA
  test("returns bookinStateContext value", () => {
    const { result } = renderHook(() => useCompanyData())

    expect(result.current.companyData).toEqual(companyData)
  })
})
