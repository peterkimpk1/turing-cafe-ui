describe('postReservation', () => {
  beforeEach(() => {
    cy.fixture('sampleReservations').then((json) => {
      cy.intercept('GET','http://localhost:3001/api/v1/reservations', {
        statusCode:200,
        fixture: 'sampleReservations.json'
      })
    })

  });
  it('should be able to delete reservations', () => {
    cy.visit('http://localhost:3000')
    .viewport('macbook-13')
    .get('h1').should('contain.text','Turing Cafe Reservations')
    .get('.resy-form').should('exist')
    .get('.resy-container').should('exist')
    .get('.resy-container .card').first().should('exist')
    .get('.resy-container .card').should('have.length',5)
    .get('.resy-container .card h3').first().should('contain.text','Christie')
    cy.fixture('sampleReservations').then(json => {
      cy.intercept('DELETE','http://localhost:3001/api/v1/reservations/'+json[0].id, {
        statusCode:201
      })
    })
    .get('.resy-container .card button').first().click()
    .get('.resy-container .card').should('have.length', 4)
  })
})