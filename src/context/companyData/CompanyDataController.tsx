import React from 'react'
import { CompanyDataContext } from './CompanyDataContext'
import { useCompanyData } from '../../hooks/useCompanyData/useCompanyData'

export const CompanyDataController = ({ children }: { children: React.ReactNode }) => {
  const { companyData, setCompanyData } = useCompanyData()
  return <CompanyDataContext.Provider value={{ companyData, setCompanyData }}>{children}</CompanyDataContext.Provider>
}
