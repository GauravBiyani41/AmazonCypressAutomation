/// <reference types="Cypress" />

import HomePage from '../PageObjects/HomePage.cy'

const homePageObject = new HomePage();

describe('Amazon VerifyingOptionsUnderSearchFunctionality Test', () => {

    it('Amazon Verifying Options Under Search', () =>
    {
      cy.visit('https://www.amazon.in/');
      homePageObject.validateOptionsUnderSearch();
    })
})