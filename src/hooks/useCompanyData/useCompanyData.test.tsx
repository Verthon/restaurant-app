import React, { ReactNode } from 'react'
import { renderHook } from '@testing-library/react-hooks'

import { COMPANY_DATA } from '../../constants/companyData'
import { CompanyDataStateContext, CompanyDataDispatchContext } from '../../context/companyData/CompanyDataContext'
import { useCompanyData } from './useCompanyData'

describe('useCompanyData', () => {
  const state = {
    companyData: COMPANY_DATA,
  }

  const setCompanyData = jest.fn()

  const wrapper = ({ children }: { children?: ReactNode }) => (
    <CompanyDataStateContext.Provider value={state}>
      <CompanyDataDispatchContext.Provider value={setCompanyData}>{children}</CompanyDataDispatchContext.Provider>
    </CompanyDataStateContext.Provider>
  )
  test('returns bookinStateContext value', async () => {
    const { result } = renderHook(() => useCompanyData(), {
      wrapper
    })

    expect(result.current).toEqual(state)
  })

  test('throws error when used outside CompanyDataController', async () => {
    const { result } = renderHook(() => useCompanyData())

    expect(result.error).toEqual(undefined)
  })
})
