export const ROUTES = Object.freeze({
  home: "/",
  menu: "/menu",
  bookTable: "/book-table",
  review: "/review-booking",
  login: "/login",
  admin: "/admin",
} as const)

export const DEFAULT_LINKS = [
  { name: "Menu", link: "menu" },
  { name: "Book Table", link: "book-table" },
]
