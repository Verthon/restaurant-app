import React, { ReactNode } from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { MockedProvider } from '@apollo/client/testing'

import { useMenuData, GET_MENU } from './useMenuData'

// :: DATA ::
const INITIAL_STATE = {"appetizers": [], "desserts": [], "drinks": [], "mains": [], "salads": []}
const appetizers = {
  price: 850,
  name: 'Tzatziki',
  id: 4,
  description: 'Refreshing traditional cucumber and garlic yogurt dip. Seasoned with fresh, local herbs.',
  category_id: 2,
  category: {
    id: 2,
    name: 'appetizers',
    __typename: 'categories'
  },
  __typename: 'products'
}
const desserts = {
  price: 1100,
  name: 'Melomakarono',
  id: 7,
  description: 'Egg shaped dessert made from olive oil, honey, cognac, cinnamon, orange.',
  category_id: 3,
  category: {
    id: 3,
    name: 'desserts',
    __typename: 'categories'
  },
  __typename: 'products'
}

// :: MOCKS ::
const menuQueryMock = {
  request: {
    query: GET_MENU
  },
  result: {
    data: {
      products: [appetizers, desserts]
    }
  }
}

const menuQueryErrorMock = {
  request: {
    query: GET_MENU
  },
  error: new Error('Ohh Ohh!')
}

function getHookWrapper(mocks = []) {
  const wrapper = ({ children }) => (
    <MockedProvider mocks={mocks} addTypename={false}>
      {children}
    </MockedProvider>
  )
  const { result, waitForNextUpdate } = renderHook(() => useMenuData(), {
    wrapper
  })
  // Test the initial state of the request
  expect(result.current.loading).toBeTruthy()
  expect(result.current.error).toBeUndefined()
  expect(result.current.menu).toEqual(INITIAL_STATE)
  return { result, waitForNextUpdate }
}

describe('useMenuData', () => {
  test('returns default state when loading data from GraphQl', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => <MockedProvider>{children}</MockedProvider>

    const { result, waitForNextUpdate } = getHookWrapper([menuQueryMock])

    expect(result.current.menu).toEqual(INITIAL_STATE)
    expect(result.current.loading).toBeTruthy()

    await waitForNextUpdate()
  })

  it("should return error when request fails", async () => {
    // Similar to the first case, but now we use countriesQueryErrorMock
    const { result, waitForNextUpdate } = getHookWrapper([
      menuQueryErrorMock
    ]);
    await waitForNextUpdate();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeTruthy();
    expect(result.current.menu).toEqual(INITIAL_STATE);
  });
  

  test('should return the correct menu and falsy loading indicator', async () => {})
})
