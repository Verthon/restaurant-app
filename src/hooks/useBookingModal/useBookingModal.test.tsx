import { renderHook, act } from '@testing-library/react-hooks'
import { useBookingModal } from './useBookingModal'

describe('useBookingModal', () => {
  test('should handle isOpen state', () => {
    const { result } = renderHook(() => useBookingModal())

    act(() => {
      result.current.toggleModal()
    })

    expect(result.current.showModal).toBeTruthy()
  })
})