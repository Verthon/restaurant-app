describe('check if submit logging in works', () => {
  it('log into admin dashboard', () => {
    cy.visit(`${Cypress.config().baseUrl}/login`)
    cy.get("[type='email']").type(Cypress.env('login'))
    cy.get("[type='password']").type(Cypress.env('password'))
    cy.get('form').submit()
    cy.contains('h2', 'Bookings')
    cy.get('.table').find('tbody')
  })
})