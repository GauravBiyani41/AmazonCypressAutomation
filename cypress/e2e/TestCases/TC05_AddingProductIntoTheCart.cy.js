/// <reference types="Cypress" />

import SignInPage from '../../PageObjects/SignInPage.cy';
import HomePage from '../../PageObjects/HomePage.cy';
import ProductPage from '../../PageObjects/ProductPage.cy';

const signInPageObject = new SignInPage();
const homePageObject = new HomePage();
const productPageObject = new ProductPage();

const emailId = 'biyanigaurav11@gmail.com';
const password = 'Highest@200';
const enteredDataInSearchField='Samsung';

describe('Adding Product Into Cart Test', () => {

    it('Adding Product Into Cart', () =>
    {
      cy.visit('https://www.amazon.in/');

      signInPageObject.clickOnAccountAndListButton();

      
      signInPageObject.enterEmailId(emailId);
      signInPageObject.clickOnContinueButton();

      
      signInPageObject.enterPassword(password);
      signInPageObject.clickOnSignInSubmitButton();

      homePageObject.enterDataInSearchField(enteredDataInSearchField);

      productPageObject.clickOnTheProduct();

      productPageObject.clickOnAddToCart();
      productPageObject.clickOnTheCart();
      productPageObject.verifyTheCartTitle();

      productPageObject.clickOnProceedToBuy();
      productPageObject.verifyTheDeliveryAddressTitle();

      cy.go('back');

      productPageObject.clickOnDeleteTheProduct();
      cy.wait(5000);
      productPageObject.verifyTheProductDeleteMessage();

      homePageObject.clickOnAllOption();
      homePageObject.clickOnSignOut();
      
    })
})