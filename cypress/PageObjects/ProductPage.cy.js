/// <reference types="Cypress" />
const selectors = 
{
    button : {
               cart : "[id='attach-sidesheet-view-cart-button'] span input",
    },
    input : {
               addToCart : "#add-to-cart-button",
               proceedToBuy : "input[name='proceedToRetailCheckout']",
               deleteTheProduct : "[value='Delete']",
    },

    label : {

        resultOfTheSearch : ".a-spacing-top-small span[class^='a-color-state']",
        deleteMessage : "div h1",
        aboutTheProduct : "#feature-bullets h1",
        cartTitle : ".a-row h1",
        deliveryAddressTitle: "[class='a-column a-span10'] h3[class='a-color-state']",
    },
    link : {
      products : "#search h2 a"
    }
}


class ProductPage
{
  
validateTheResultOfTheSearch(enterDataInSearchField)
{
    cy.get(selectors.label.resultOfTheSearch).invoke('text').then((dataEnteredInTheSearch) => 
    {
        expect(dataEnteredInTheSearch).to.contain(enterDataInSearchField);
    })

}

clickOnTheProduct()
{
    cy.get(selectors.link.products).invoke('removeAttr','target').first().click();
}

clickOnAddToCart()
{

    cy.get(selectors.input.addToCart).click();
}

clickOnTheCart()
{
   cy.wait(10000);//
   return cy.get(selectors.button.cart).last().click();
}

clickOnProceedToBuy()
{
    cy.get(selectors.input.proceedToBuy).click();
}

clickOnDeleteTheProduct()
{
    cy.get(selectors.input.deleteTheProduct).click();
}

verifyTheProductDeleteMessage()
{
    
    cy.get(selectors.label.deleteMessage).invoke('text').then((productDeleteMessage) =>
    {
        productDeleteMessage = productDeleteMessage.trim().trim();   
        expect(productDeleteMessage).to.equal( 'Your Amazon Cart is empty.');
    })
}

verifyTheProductDescriptionPage()
{
     
    cy.get(selectors.label.aboutTheProduct).invoke('text').then((productDescriptionText) => {
        productDescriptionText = productDescriptionText.trim();       
        expect(productDescriptionText).to.equal('About this item');
    })
}

verifyTheCartTitle()
{
     
    cy.get(selectors.label.cartTitle).invoke('text').then((cartTitleText) => {
        cartTitleText = cartTitleText.trim();
        expect(cartTitleText).to.equal('Shopping Cart');
    })
}

verifyTheDeliveryAddressTitle()
{
    cy.get(selectors.label.deliveryAddressTitle).invoke('text').then((deliveryAddressText) => 
    {
        deliveryAddressText = deliveryAddressText.replace(/[0-9]/g,'').trim();
        expect(deliveryAddressText).to.equal('Select a delivery address')
    })
}

}

export default ProductPage