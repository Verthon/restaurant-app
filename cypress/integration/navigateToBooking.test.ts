
describe('sample test', () => {
  it('check if true is true', () => {
    cy.visit(Cypress.config().baseUrl)
    cy.contains('h1', 'Alkinoos Taverna')
    cy.contains('a', 'book table').click()
  })
})