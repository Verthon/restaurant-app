import { formatPrice, splitDate, splitTime, formatDate, convertToDate } from '../../utils/helpers'

test('formatPrice', () => {
  expect(formatPrice(290)).toBe('$2.90')
})

test('splitDate', () => {
  expect(splitDate('Monday,February 17, 1995 00:00:00')).toBe('February 17')
})

test('splitTime', () => {
  expect(splitTime('Wednesday,February 20,2019,6:35 PM')).toBe('6:35 PM')
})

test('formatDate', () => {
  expect(formatDate(new Date('February 17, 2019'))).toBe(
    'Sunday, February 17, 2019, 12:00 AM'
  )
})

test('convertToDate', () => {
  expect((convertToDate('October 30, 2019'))).toMatchObject(
    new Date('October 30, 2019')
  )
})
