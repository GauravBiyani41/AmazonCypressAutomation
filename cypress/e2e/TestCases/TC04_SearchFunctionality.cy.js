/// <reference types="Cypress" />

import HomePage from '../PageObjects/HomePage.cy'
import ProductPage from '../PageObjects/ProductPage.cy';

const homePageObject = new HomePage();
const productPageObject = new ProductPage();

const enteredDataInSearchField='Samsung';

describe('Amazon Search Functionality Test', () => {

    it('Amazon Search Functionality', () =>
    {
      cy.visit('https://www.amazon.in/');
      homePageObject.enterDataInSearchField(enteredDataInSearchField);
      productPageObject.validateTheResultOfTheSearch(enteredDataInSearchField);
      
    })
})