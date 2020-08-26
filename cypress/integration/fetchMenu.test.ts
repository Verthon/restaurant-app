
describe('navigating to menu page and fetching Menu from database', () => {
  it('check if navigate to menu page', () => {
    cy.visit(`${Cypress.config().baseUrl}`)
    cy.contains('h1', 'Alkinoos Taverna')
    cy.contains('a', 'our menu').click()
  })

  it('check if menu page contains data from server', () => {
    cy.visit(`${Cypress.config().baseUrl}/menu`)
    cy.contains('h2', 'appetizers')
    cy.contains('h3', 'Tzatziki')
  })
})