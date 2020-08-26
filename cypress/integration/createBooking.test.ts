
describe('booking process', () => {
  it('navigates from home to bookTable', () => {
    cy.visit(`${Cypress.config().baseUrl}`)
    cy.contains('h1', 'Alkinoos Taverna')
    cy.contains('a', 'book table').click()
  })

  it('should fill the booking form with todays date', () => {
    cy.contains('h2', 'Make a reservation')
    cy.get('input[name="name"]').type('Mick Testowsky')
    cy.get('input[name="email"]').type('mick.testowsky@test.pl')
    cy.get('input[name="Datepicker"]').click()
    cy.get('.react-datepicker__day--031').click({ multiple: true })
    cy.get('.react-datepicker__time-list-item').contains('13').click()
    cy.get('input[name="guests"]').type('2')
    cy.get('form').submit()
  })

  it('should output correct data in review-booking page', () => {
    cy.get('strong').contains('Mick Testowsky')
    cy.get('.review-booking__value').contains('12')
    cy.get('.review-booking__value').contains('August 31')
    cy.get('.review-booking__value').contains('1:00 PM')
  })
})