/// <reference types="Cypress" />
const selectors = 
{
    button : {
        addressDeleteConfirmation : "[aria-labelledby*='deleteAddressModal']",      
    },

    input : {
        fullName : "[id$='enterAddressFullName']",
        mobileNo : "[id$='enterAddressPhoneNumber']",
        pincode  : "[id$='enterAddressPostalCode']",  
        addressLine1 : "[id$='AddressLine1']",
        addressLine2 : "[id$='AddressLine2']",
        landmark : "[id$='landmark']",
        defaultAddress : "[id$='my-default']",
        addAddressButton : "span[id$='submit-button'] input[type='submit']",
        addressSavedMessage : "h4[class*=alert-heading]",

    },

    label : {

       plusIcon : "[id$='plus-address-icon']",
       addressDeletedMessage : "#yaab-alert-box h4",
    },
    link : {
        addressRemove : "a[class$='delete-link']"
    }
}

class UserAddressPage
{

    clickOnPlusIcon()
    {
        return cy.get(selectors.label.plusIcon).click();
    }

    enterTheFullName(fullName)
    {
        cy.get(selectors.input.fullName).type(fullName);
    }

    enterTheMobileNumber(mobileNumber)
    {
        cy.get(selectors.input.mobileNo).type(mobileNumber);
    }

    enterThePincode(pinCode)
    {
        cy.get(selectors.input.pincode).type(pinCode);
    }

    enterTheAddress(addressLine1,addressLine2,landMark)
    {
        cy.get(selectors.input.addressLine1).type(addressLine1);
        cy.get(selectors.input.addressLine2).type(addressLine2);
        cy.get(selectors.input.landmark).type(landMark);
    }

    clickOnAddAddress()
    {
      return  cy.get(selectors.input.addAddressButton).click();
    }

    clickOnDefaultUserAddress()
    {
       return cy.get(selectors.input.defaultAddress).click();
    }

    clickOnAddressDeleteConfirmationButton()
    {
        cy.wait(7000);//as not able to click on the delete button it was taking time 
        //to get synch with the script 
        cy.get(selectors.button.addressDeleteConfirmation).click();
    }

    clickOnRemoveAddress(index)
    {
       return cy.get(selectors.link.addressRemove).eq(index).click();
    }

    validateAddressDeletionMessage()
    {
        const addressDeletedConfirmationMessage="Address deleted";

        cy.get(selectors.label.addressDeletedMessage).invoke('text').then((addressDeletedMessage) =>
        {
            expect(addressDeletedMessage).to.eql(addressDeletedConfirmationMessage);
        })
    }

}

export default UserAddressPage