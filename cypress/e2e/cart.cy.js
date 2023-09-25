describe('Search', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('TC016 - Complete a purchase using Crypto', () => {
        cy.addNftToCart()
        
        cy.get(`i[title="cart"]`).parent().click()
        cy.get(`h4[data-id="TextHeading]`).should('have.text', 'Your cart')
        cy.contains('Complete purchase').click()
        cy.get(`div[data-testid="wallet-modal"]`).should('have.text', 'Connect your wallet')
    })

    it('TC019 - Remove all the NFTs from the Shopping Cart', () => {
        
    })

    it('TC016 - Add an NFT to the shopping cart', () => {
        cy.get('a[href*="assets/ethereum"]').eq(0).click()
        cy.clock()
        cy.get(`i:contains('shopping_cart')`).click()
        cy.contains('div', 'Added to cart').should('be.visible')
        cy.tick(8000)
        cy.contains('div', 'Added to cart').should('not.be.visible')
        
    })

})