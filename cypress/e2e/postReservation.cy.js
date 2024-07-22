describe('postReservation', () => {
  beforeEach(() => {
    cy.fixture('sampleReservations').then((json) => {
      cy.intercept('GET','http://localhost:3001/api/v1/reservations', {
        statusCode:200,
        fixture: 'sampleReservations.json'
      })
    })

  });
  it('should be able to see posted reservation as a new card', () => {
    cy.visit('http://localhost:3000')
    .viewport('macbook-13')
    cy.get('[placeholder="Name"]').type('Adam')
    cy.get('[placeholder="Date (mm/dd)"]').type('07/22')
    cy.get('[placeholder="Time"]').type('12:30')
    cy.get('[placeholder="Number of guests"]').type('10')
    cy.intercept('POST','http://localhost:3001/api/v1/reservations',{
      statusCode: 200,
      fixture: 'postReservation.json'
    })
    cy.get('.resy-form > button').click()
    cy.get('.resy-container .card').should('have.length',6)
    cy.get('.resy-container .card').last().get('h3').should('contain.text','Adam')
  })
})