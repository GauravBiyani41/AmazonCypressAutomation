/// <reference types="Cypress" />
const selectors = 
{
    input : {
        addProductToWishList : "input[id='add-to-wishlist-button-submit']",
           
    },

    link : {
        viewYourWishList : 'span[id*="view-your-list-button"] span a',
      
    }
}

class ProductDescriptionPage
{

    clickOnWishList() {

       return cy.get(selectors.input.addProductToWishList).click();
    }


    clickOnViewYourList() {

        return cy.get(selectors.link.viewYourWishList).click();
    }
}

export default ProductDescriptionPage

