import { renderHook } from '@testing-library/react-hooks'
import MockDate from 'mockdate'
import { useBooking } from './useBooking'

MockDate.set('2000-12-12')

jest.mock('../../utils/helpers', () => ({
  __esModule: true, // this property makes it work
  getTomorrowsDate: jest.fn(() => new Date("2000-12-12")),
}));

describe('useBooking', () => {
  const state = {
      date: new Date(),
      guests: 1,
      name: "",
      email: "",
      confirmed: false
  }

  test('returns bookinStateContext value', async () => {
    const { result } = renderHook(() => useBooking())

    // This is unfortunately somewhat annoying to test because you have it in a static constant and not evaluated right away
    // You will have to do something like jest.mock for that import
    // The reason its difficult: the date would be evaluated when you import it, not when you call it in your spec
    // Another option is to resetModules and do require/import for each spec after stubbing date.

    expect(result.current.booking).toEqual(state)
  })
})
