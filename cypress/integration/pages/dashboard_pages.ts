export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    link_sauceLabsFleeceJacket = 'Sauce Labs Fleece Jacket'
    btn_JacketAddToCart = '#add-to-cart-sauce-labs-fleece-jacket'
    btn_backToProducts = '#back-to-products'
    link_sauceLabsBoltTShirt = 'Sauce Labs Bolt T-Shirt'
    btn_TShirtddToCart = '#add-to-cart-sauce-labs-bolt-t-shirt'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    //add new sauce labs fleece jacket add to cart
    sauceLabsFleeceJacket(){
        cy.contains(this.link_sauceLabsFleeceJacket).click()
        cy.contains('Sauce Labs Fleece Jacket').should('be.visible') 
        cy.get(this.btn_JacketAddToCart).click()
        cy.contains('Remove').should('be.visible') 
    }
    //back to pruduct list on dashboard
    clickBackToProducts(){
        cy.get(this.btn_backToProducts).click()
        cy.get('.title').should('be.visible')
        // cy.get('.peek').should('be.visible')
        cy.contains('Products').should('contain','Products')

    }
    //add new sauce labs bolt t-shirt add to cart
    sauceLabsBoltTShirt(){
        cy.contains(this.link_sauceLabsBoltTShirt).click()
        cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible') 
        cy.get(this.btn_TShirtddToCart).click()
        cy.contains('Remove').should('be.visible') 
    }
}