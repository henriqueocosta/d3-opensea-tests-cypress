describe('Filter', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('TC004 - Filter for NFTs that are "Listed" for sale', () => {
        cy.get(`button:contains('Listed')`).click()
        cy.get('li[data-testid="Pill"]').eq(0).should('have.text', 'Listed')
    })

    it('TC006 - Clear all filters', () => {
        const category = ['Listed', 'On auction', 'New', 'Has offers']

        category.forEach(category => {
            cy.get(`button:contains(${category})`).click()
        })
        cy.get('li[data-testid="Pill"]').eq(3).should('have.text', category[3])
        cy.get(`button:contains('Clear all')`).click()
        cy.get('li[data-testid="Pill"]').should('not.exist')
    })

    it('TC011 - Filter for NFTs in a price range', () => {
        cy.get('button[id="Header filter-price"]').click()
        cy.get('div[id="Body filter-price"]').find('i[title="Show more"]').click()
        cy.get('input[value="ETH"]').click()
        cy.get('input[placeholder="Min"]').type('4.845')
        cy.get('input[placeholder="Max"]').type('4.85')
        cy.get(`button:contains('Apply')`).click()
        cy.get('div[data-testid="ItemCardPrice"]').find('span[data-id="TextBody"]').eq(0).should('have.value', '4.845')
        cy.get('div[data-testid="ItemCardPrice"]').find('span[data-id="TextBody"]').last().should('have.value', '4.85')
    })
})