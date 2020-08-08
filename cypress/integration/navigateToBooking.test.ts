
describe('Navigate to book table', () => {
  it('check if click on book table button navigates to book table page', () => {
    cy.visit(Cypress.config().baseUrl)
    cy.contains('h1', 'Alkinoos Taverna')
    cy.contains('a', 'book table').click()
  })
})