/// <reference types="Cypress" />

import HomePage from '../PageObjects/HomePage.cy'
import SignInPage from '../PageObjects/SignInPage.cy'

const signInPageObject = new SignInPage();
const homePageObject = new HomePage();

const emailId = 'biyanigaurav11@gmail.com';
const password = 'Highest@200';

const validUserNameOnHomePage = "Hello, Gaurav";
describe('Amazon Login Test', () => {

    it('Amazon Login', () =>
    {
      cy.visit('https://www.amazon.in/');
      
      signInPageObject.clickOnAccountAndListButton();

      signInPageObject.validationOfUsernameLabelTitle();
      signInPageObject.enterEmailId(emailId);
      signInPageObject.clickOnContinueButton();

      signInPageObject.validationOfPasswordLabelTitle();
      signInPageObject.enterPassword(password);
      signInPageObject.clickOnSignInSubmitButton();

      homePageObject.fetchAndValidateUserNameFromHomePage(validUserNameOnHomePage); 
      homePageObject.clickOnAllOption();
      homePageObject.clickOnSignOut();

      signInPageObject.validationOfUsernameLabelTitle();
    })
})