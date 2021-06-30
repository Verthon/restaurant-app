import { validateEmail, validate } from "./validate"

jest.mock("../constants/errors", () => ({
  ERRORS: {
    emailInput: "Please enter a valid email",
    nameInput: "Please enter valid name",
  },
}))

describe("validateEmail", () => {
  it("should return true or false depending on whether is valida email or not", () => {
    expect(validateEmail("invalid")).toEqual(false)
    expect(validateEmail("test@test.pl")).toEqual(true)
  })
})

describe("validate", () => {
  it("should return validation error if name is empty", () => {
    const data = { name: "", email: "" }
    expect(validate(data)).toEqual({ inputName: "name", message: "Please enter valid name" })
  })

  it("should return validation error if email is incorrect", () => {
    const emptyEmail = { name: "valid", email: "" }
    const invalidEmail = { name: "valid", email: "invalid@" }

    expect(validate(emptyEmail)).toEqual({ inputName: "email", message: "Please enter a valid email" })
    expect(validate(invalidEmail)).toEqual({ inputName: "email", message: "Please enter a valid email" })
  })

  it("should return false if the all data is valid", () => {
    const validFormObj = { name: "valid", email: "valid@gmail.com" }

    expect(validate(validFormObj)).toEqual(false)
  })
})
