describe('Search', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('TC001 - Search for an existing NFT', () => {
    cy.intercept(
      'POST',
      '/__api/graphql/'
      ).as('generalSearchRequest')

    cy.get('#trait-selector-input').type('1564{enter}')
    cy.wait('@generalSearchRequest')
    cy.get('span[data-testid="ItemCardFooter-name"]').eq(0).should('have.text', 'Pudgy Penguin #1564')
  })

  it('TC002 - Search for a non-existing NFT', () => {
    cy.intercept(
      'POST',
      '/__api/graphql/'
      ).as('generalSearchRequest')

    cy.get('#trait-selector-input').type('cat432{enter}')
    cy.wait('@generalSearchRequest')
    cy.get('div[data-testid="no-data-text"]').should('have.text', 'No items found for this search')
  })

})