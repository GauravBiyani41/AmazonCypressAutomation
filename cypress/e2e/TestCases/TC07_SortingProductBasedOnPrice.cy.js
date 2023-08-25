/// <reference types="Cypress" />

import HomePage from '../PageObjects/HomePage.cy';
import SortingBasedOnPricePage from '../PageObjects/SortingBasedOnPricePage.cy';

const homePageObject = new HomePage();
const sortingProductBasedOnPriceObject = new SortingBasedOnPricePage();

const searchProductName='Samsung';
const lowPrice = 10000;
const maxPrice = 20000;

describe('Filter The Product Based On Price Test', () =>{

    it('Filter The Product Based On Price',()=>{

        cy.visit('https://www.amazon.in/');

        homePageObject.enterDataInSearchField(searchProductName);

        sortingProductBasedOnPriceObject.enterTheLowPrice(lowPrice);
        sortingProductBasedOnPriceObject.enterTheHighPrice(maxPrice);
        sortingProductBasedOnPriceObject.clickOnGo();

        sortingProductBasedOnPriceObject.verifyingTheSortedProductsBasedOnPrice(lowPrice,maxPrice);

    })
})