/// <reference types="Cypress" />
const selectors = 
{
    input : {
        deleteWishListProduct : "input[name='submit.deleteItem']"
    },

    label : {

        wishListTitle : "div[role='heading']",
        deletedProductSuccessfulMessage : "[id^=item_] div[class*='a-alert-inline-success'] [class='a-alert-content']"
    },
    link : {
        wishListProductName : "h2 a"
    }
}


class WishListPage
{

    clickOnDeleteTheWishListProduct()
    {
        cy.get(selectors.input.deleteWishListProduct).click();
    }
    
    verifyWishListTitle()
    {
    
        cy.get(selectors.label.wishListTitle).invoke('text').then((wishListLableText) =>
        {
            wishListLableText = wishListLableText.trim();
            expect(wishListLableText).to.equal('Your Lists');
        })
    }

    verifyWishListProductName(searchProductName)
    {
        
        cy.get(selectors.link.wishListProductName).invoke('text').then((productName) =>
        {
            productName = productName.trim().trim();
            productName = productName.substring(0,searchProductName.length);
            expect(productName).to.equal(searchProductName);
        })
    }

    verifyDeletedWishListMessage()
    {
        cy.get(selectors.label.deletedProductSuccessfulMessage).first().invoke('text').then((deleteMessageText) =>
        {
            expect(deleteMessageText).to.equal('Deleted');
        })

    }

}

export default WishListPage