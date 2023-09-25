Cypress.Commands.add('addNftToCart', () => { 
    cy.visit('/')
    cy.get('a[href*="assets/ethereum"]').eq(0).click()
    cy.get(`i:contains('shopping_cart')`).click()
})