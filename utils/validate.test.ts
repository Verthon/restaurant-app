import { validateEmail, validate } from './validate'
import { errorMsg } from '../constants/errors'

describe('validateEmail function', () => {
  it("should return false once validated string didn't pass regex", async () => {
    expect(validateEmail('test')).toBeFalsy()
  })

  it('should return true once email is valid', async () => {
    expect(validateEmail('test@example.com')).toBeTruthy()
  })
})

describe('validate function', () => {
  test('should return error object (message, inputName) on invalid name', async () => {
    const testFormData = {
      name: '',
      email: 'correctmail@mail.com'
    }
    expect(validate(testFormData)).toStrictEqual({
      inputName: 'name',
      message: errorMsg.name
    })
  })
  it('should return error object (message, inputName) on invalid email', async () => {
    const testFormData = {
      name: 'goodName',
      email: 'wrongemail@'
    }
    expect(validate(testFormData)).toStrictEqual({
      inputName: 'email',
      message: errorMsg.email
    })
  })
  it('should return false if validation is successful', async () => {
    const testFormData = {
      name: 'goodName',
      email: 'goodemail@test.pl'
    }
    expect(validate(testFormData)).toBeFalsy()
  })
})
