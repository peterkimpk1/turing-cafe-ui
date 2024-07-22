describe('dataInput', () => {
  beforeEach(() => {
    cy.fixture('sampleReservations').then((json) => {
      cy.intercept('http://localhost:3001/api/v1/reservations', {
        statusCode:200,
        fixture: 'sampleReservations.json'
      })
    })
  });
  it('should be able to input in form and the value should show', () => {
    cy.visit('http://localhost:3000')
    cy.get('[placeholder="Name"]').type('Turing')
    cy.get('[placeholder="Name"]').should('contain.value','Turing')
    cy.get('[placeholder="Date (mm/dd)"]').type('07/22')
    cy.get('[placeholder="Date (mm/dd)"]').should('contain.value','07/22')
    cy.get('[placeholder="Time"]').type('9:30')
    cy.get('[placeholder="Time"]').should('contain.value','9:30')
    cy.get('[placeholder="Number of guests"]').type('5')
    cy.get('[placeholder="Number of guests"]').should('contain.value','5')
  })
  it.only('should be able to let user make a reservation', () => {
    cy.visit('http://localhost:3000')
    cy.get('[placeholder="Name"]').type('Turing')
    cy.get('[placeholder="Date (mm/dd)"]').type('07/22')
    cy.get('[placeholder="Time"]').type('9:30')
    cy.get('[placeholder="Number of guests"]').type('5')
    cy.get('.resy-form > button').click()
    cy.get('.resy-container .card').should('have.length',6)
    cy.get('.resy-container .card').last().get('h3').should('contain.text','Turing')
  })
})