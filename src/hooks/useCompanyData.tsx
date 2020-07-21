import { useEffect, useState, useContext } from 'react'
import { DataContext } from '../components/DataContext'

export const useCompanyData = () => {
  type CompanyData = {
    name: string,
    hours: string | any,
    contact: string | any,
    location: string | any,
    isLoading: boolean
  }
  const { state } = useContext(DataContext)
  const [companyData, setCompanyData] = useState<CompanyData>({
    name: '',
    hours: '',
    location: '',
    contact: '',
    isLoading: true
  })

  useEffect(() => {
    const data = state.company.data
    setCompanyData({
      ...companyData,
      hours: data.hours,
      location: data.location,
      contact: data.contact,
      isLoading: false
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.company.data])

  return {
    name: companyData.name,
    hours: companyData.hours,
    location: companyData.location,
    contact: companyData.contact,
    isLoading: companyData.isLoading
  }
}
