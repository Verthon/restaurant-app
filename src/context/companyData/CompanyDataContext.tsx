import { createContext } from 'react'
import { useCompanyDataState } from '../../hooks/useCompanyData/useCompanyData.types'
import { COMPANY_DATA } from '../../constants/companyData'

export const contextData: useCompanyDataState = {
  companyData: COMPANY_DATA,
  setCompanyData: () => {}
}

export const CompanyDataContext = createContext(contextData)
