import MockDate from "mockdate"

MockDate.set("2000-11-22")

import {
  formatPrice,
  splitDate,
  splitTime,
  formatDate,
  convertToDate,
  getTomorrowsDate,
  generateLink,
  loadLocalStorageState,
  saveLocalStorageState,
  transformLocalStorageData,
} from "./helpers"

describe("helpers", () => {
  describe("formatPrice", () => {
    it("should format price to $2.90 format", () => {
      expect(formatPrice(290)).toBe("$2.90")
    })
  })
  describe("splitDate", () => {
    it("should split date to contain only name of the month and day", () => {
      expect(splitDate("Monday,February 17, 1995 00:00:00")).toBe("February 17")
    })
  })
  describe("splitTime", () => {
    it("should split date to contain only time in format of HH:mm PM/AM", () => {
      expect(splitTime("Wednesday,February 20,2019,6:35 PM")).toBe("6:35 PM")
    })
  })

  describe("formatDate", () => {
    it("should format date object to be in a format MMMM dd, yyyy h aa", () => {
      expect(formatDate(new Date())).toBe("Wednesday, November 22, 2000, 1:00 AM")
    })
  })

  describe("loadLocalStorageState", () => {
    it("should return nothing if the given key is not in localStorage", () => {
      jest.spyOn(Storage.prototype, "getItem")
      Storage.prototype.getItem = jest.fn(() => null)
      expect(loadLocalStorageState("non-existent")).toBeUndefined()
      expect(Storage.prototype.getItem).toBeCalledWith("non-existent")
      jest.restoreAllMocks()
    })

    it("should return object that was previously saved to localStorage", () => {
      jest.spyOn(Storage.prototype, "getItem")
      Storage.prototype.getItem = jest.fn(() =>
        JSON.stringify({
          booking: {
            date: new Date(),
            guests: 2,
            name: "Mariushh",
            email: "myemail@gmail.com",
            confirmed: false,
            id: undefined,
          },
        })
      )
      expect(loadLocalStorageState("booking")).toEqual({
        booking: {
          confirmed: false,
          date: "2000-11-22T00:00:00.000Z",
          email: "myemail@gmail.com",
          guests: 2,
          name: "Mariushh",
        },
      })
      expect(Storage.prototype.getItem).toBeCalledWith("booking")
      jest.restoreAllMocks()
    })

    it("should catch exceptions when localStorage will fail", () => {
      jest.spyOn(Storage.prototype, "getItem")
      Storage.prototype.getItem = jest.fn(() => {
        throw new Error("ERROR")
      })

      expect(loadLocalStorageState("booking")).toBeUndefined()
    })
  })

  describe("saveLocalStorageState", () => {
    it("should save state to localStorage", () => {
      jest.spyOn(Storage.prototype, "setItem")
      const state = {
        state: {
          booking: {
            date: new Date(),
            guests: 2,
            name: "Mariushh",
            email: "myemail@gmail.com",
            confirmed: false,
            id: undefined,
          },
        },
      }
      localStorage.setItem = jest.fn(() => null)
      saveLocalStorageState(state)
      expect(Storage.prototype.setItem).toBeCalledWith("booking", JSON.stringify(state))
      jest.restoreAllMocks()
    })
    it("should catch exceptions when localStorage will fail", () => {
      jest.spyOn(Storage.prototype, "setItem")
      const state = {
        state: {
          booking: {
            date: new Date(),
            guests: 2,
            name: "Mariushh",
            email: "myemail@gmail.com",
            confirmed: false,
            id: undefined,
          },
        },
      }
      Storage.prototype.setItem = jest.fn(() => {
        throw new Error("ERROR")
      })

      expect(saveLocalStorageState(state)).toBeUndefined()
    })
  })

  describe("transformLocalStorageData", () => {
    it("should transform guests field to be type of number", () => {
      expect(
        transformLocalStorageData({
          confirmed: "false",
          date: "2000-11-22T00:00:00.000Z",
          email: "myemail@gmail.com",
          guests: "2",
          name: "Mariushh",
        })
      ).toEqual({
        confirmed: false,
        date: new Date("2000-11-22T00:00:00.000Z"),
        email: "myemail@gmail.com",
        guests: 2,
        name: "Mariushh",
        id: undefined,
      })
    })
  })

  describe("convertToDate", () => {
    it("should return new Date object based in input", () => {
      expect(convertToDate("October 30, 2019")).toMatchObject(new Date("October 30, 2019"))
    })

    it("should return new Date object if date param is not provided", () => {
      expect(convertToDate()).toMatchObject(new Date())
    })
  })

  describe("getTomorrowsDate", () => {
    it("should return tomorrows date", () => {
      expect(getTomorrowsDate()).toEqual(new Date("2000-11-23T00:00:00.000Z"))
    })
  })

  describe("generateLink", () => {
    it("should return normal link for given path", () => {
      expect(generateLink({ path: "login", isHashLink: false })).toEqual("/login")
    })
    it("should return hashlink for given path", () => {
      expect(generateLink({ path: "login", isHashLink: true })).toEqual("#login")
    })
  })
})
