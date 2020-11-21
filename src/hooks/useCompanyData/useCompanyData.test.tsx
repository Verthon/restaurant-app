import React, { ReactNode } from 'react'
import { renderHook } from '@testing-library/react-hooks'

import { COMPANY_DATA } from '../../constants/companyData'
import { CompanyDataContext } from '../../context/companyData/CompanyDataContext'

describe('useCompanyData', () => {
  const state = COMPANY_DATA

  const wrapper = ({ children }: { children?: ReactNode }) => (
    <CompanyDataContext.Provider
      value={state}
    >
      {children}
    </CompanyDataContext.Provider>
  )
  test('returns bookinStateContext value', async () => {
    const { result } = renderHook(() => useBooking(), {
      wrapper
    })

    expect(result.current).toEqual(state)
  })

  test('throws error when used outside AuthContextController', async () => {
    const { result } = renderHook(() => useAuthState())

    expect(result.error).toEqual(Error('useAuthState must be used within an AuthContextController'))
  })
})
