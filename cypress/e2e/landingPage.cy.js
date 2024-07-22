describe('landing page spec', () => {
  beforeEach(() => {
    cy.fixture('sampleReservations').then((json) => {
      cy.intercept('http://localhost:3001/api/v1/reservations', {
        statusCode:200,
        fixture: 'sampleReservations.json'
      })
    })
   
  })
  it('should display all necessary components on load', () => {
    cy.visit('http://localhost:3000')
    .viewport('macbook-13')
    .get('h1').should('contain.text','Turing Cafe Reservations')
    .get('.resy-form').should('exist')
    .get('.resy-container').should('exist')
    .get('.resy-container .card').first().should('exist')
    .get('.resy-container .card').should('have.length',5)
  })
})