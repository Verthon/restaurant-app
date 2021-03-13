import React from "react"
import { CompanyDataStateContext, CompanyDataDispatchContext } from "./CompanyDataContext"
import { useCompanyData } from "../../hooks/useCompanyData/useCompanyData"
import { Props } from "./CompanyDataContext.types"

export const CompanyDataController = ({ children }: Props) => {
  const { companyData, setCompanyData } = useCompanyData()
  return (
    <CompanyDataStateContext.Provider value={{ companyData }}>
      <CompanyDataDispatchContext.Provider value={setCompanyData}>{children}</CompanyDataDispatchContext.Provider>
    </CompanyDataStateContext.Provider>
  )
}
