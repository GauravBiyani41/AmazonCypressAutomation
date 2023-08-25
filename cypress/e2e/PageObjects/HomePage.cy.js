/// <reference types="Cypress" />
const selectors = 
{
    input : {
        searchField : "#twotabsearchtextbox",
           
    },

    label : {
        userNameOnHomePage:"[id$='nav-line-1']",
        allOption:"[id^='nav-hamburger'] span",
        yourAddresses : "[data-card-identifier^='Addresses'] h2",
    },
    link : {
       homePageTitle : '[aria-label="Amazon.in"]',
       signOut : "a[onclick*='sign-out']",
     //yourAccount : "ul.hmenu.hmenu-visible > li:nth-child(29) > a",
       optionsUnderSearch:"#nav-xshop a",
       list : '[data-card-identifier="OrderingAndShoppingPreferences"] .a-list-item'
    }
}

class HomePage
{
    
    clickOnAllOption()
    {
        return cy.get(selectors.label.allOption).click();
    }
    clickOnYourAccount()
    {
       return cy.get('a.hmenu-item').contains('Your Account').click();
    }
    clickOnYourAddresses()
    {
        return cy.get(selectors.label.yourAddresses).click();
    }
    clickOnSignOut()
    {
       return cy.get(selectors.link.signOut).click();
    }
    fetchHomePageTitle()
    {
        return cy.get(selectors.link.homePageTitle).invoke('text').then(homePageTitle);
    }
    
    fetchAndValidateUserNameFromHomePage(validUserNameOnHomePage)
    {
       return cy.get(selectors.label.userNameOnHomePage).invoke('text').then((userNameText) =>
       {
        expect(userNameText).to.contain(validUserNameOnHomePage);

       })
       
    }

    validateOptionsUnderSearch()
    {
        const optionList = [
            "Amazon miniTV","Sell","Best Sellers","Today's Deals","Mobiles","New Releases",
            "Customer Service","Prime"," Electronics ","Home & Kitchen", "Gift Ideas	","Fashion","Computers","Amazon Pay","Coupons","Books","Home Improvement","Beauty & Personal Care","Toys & Games","Sports, Fitness & Outdoors","Car & Motorbike","Grocery & Gourmet Foods","Health, Household & Personal Care","Gift Cards","Baby","Kindle eBooks","Video Games","Pet Supplies","Audible","AmazonBasics","Subscribe & Save"
        ];

       cy.get(selectors.link.optionsUnderSearch).each( (ele,index,list) =>
       {  
        expect(list).to.have.length(optionList.length);
        cy.wrap(ele).should('contain.text',optionList[index]);
       })
    }

    enterDataInSearchField(enterData)
    {
       cy.get(selectors.input.searchField).type(enterData).type('{enter}');
    }

    clickOnList()
    {
        cy.get('[data-card-identifier="OrderingAndShoppingPreferences"] .a-list-item').contains('Lists').click();
    }


}

export default HomePage