/// <reference types="Cypress" />

import HomePage from '../PageObjects/HomePage.cy'
import SignInPage from '../PageObjects/SignInPage.cy'
import UserAddressPage from '../PageObjects/UserAddressPage';

const signInPageObject = new SignInPage();
const homePageObject = new HomePage();
const userAddressPageObject = new UserAddressPage();

const emailId = 'biyanigaurav11@gmail.com';
const password = 'Highest@200';
const fullName = "Gaurav Sanjay Biyani";
const phoneNumber = "8698163640";
const pinCode = "444403";
const addressLine1 = "401,Near Mangrulpir BusStand";
const addressLine2 = "Mangrulpir";
const landMark = "Washim";

describe('Amazon AddingUserNewAddress Test', () => {

    it('Amazon Adding User New Address', () =>
    {
      cy.visit('https://www.amazon.in/');
      
      signInPageObject.clickOnAccountAndListButton();

      
      signInPageObject.enterEmailId(emailId);
      signInPageObject.clickOnContinueButton();

      
      signInPageObject.enterPassword(password);
      signInPageObject.clickOnSignInSubmitButton();

      homePageObject.clickOnAllOption();
      homePageObject.clickOnYourAccount();
      homePageObject.clickOnYourAddresses();

      userAddressPageObject.clickOnPlusIcon();

      userAddressPageObject.enterTheFullName(fullName);
      userAddressPageObject.enterTheMobileNumber(phoneNumber);
      userAddressPageObject.enterThePincode(pinCode);
      userAddressPageObject.enterTheAddress(addressLine1,addressLine2,landMark);

      userAddressPageObject.clickOnDefaultUserAddress();
      userAddressPageObject.clickOnAddAddress();
      
      userAddressPageObject.clickOnRemoveAddress(0);
      userAddressPageObject.clickOnAddressDeleteConfirmationButton();
      userAddressPageObject.validateAddressDeletionMessage();

      homePageObject.clickOnAllOption();
      homePageObject.clickOnSignOut();
    })
})