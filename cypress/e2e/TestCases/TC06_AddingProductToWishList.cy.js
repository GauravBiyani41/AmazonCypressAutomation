/// <reference types="Cypress" />

import SignInPage from '../../PageObjects/SignInPage.cy';
import HomePage from '../../PageObjects/HomePage.cy';
import ProductPage from '../../PageObjects/ProductPage.cy';
import ProductDescriptionPage from '../../PageObjects/ProductDescriptionPage.cy';
import WishListPage from '../../PageObjects/WishListPage.cy';

const signInPageObject = new SignInPage();
const homePageObject = new HomePage();
const productPageObject = new ProductPage();
const productDescriptionPageObject = new ProductDescriptionPage();
const wishListPageObject = new WishListPage();

const emailId = 'biyanigaurav11@gmail.com';
const password = 'Highest@200';
const searchProductName='Samsung';

describe('Adding Product Into WishList Test', () => {

  beforeEach(()=>
  {
    cy.visit('https://www.amazon.in/');

    signInPageObject.clickOnAccountAndListButton();
   
    signInPageObject.enterEmailId(emailId);
    signInPageObject.clickOnContinueButton();
   
    signInPageObject.enterPassword(password);
    signInPageObject.clickOnSignInSubmitButton();
  })

    it('Adding Product Into WishList', () =>
    {
     

      homePageObject.enterDataInSearchField(searchProductName);

      productPageObject.clickOnTheProduct();
      
      productDescriptionPageObject.clickOnWishList();
      productDescriptionPageObject.clickOnViewYourList();

      wishListPageObject.verifyWishListTitle();
      wishListPageObject.verifyWishListProductName(searchProductName);
    
      homePageObject.clickOnAllOption();
      homePageObject.clickOnSignOut();
      
    })

it('Delete the Product from WishList', () =>
{

 signInPageObject.clickOnAccountAndListButton();
 homePageObject.clickOnList();

 wishListPageObject.clickOnDeleteTheWishListProduct();
 wishListPageObject.verifyDeletedWishListMessage();

 homePageObject.clickOnAllOption();
 homePageObject.clickOnSignOut();
})
  
})