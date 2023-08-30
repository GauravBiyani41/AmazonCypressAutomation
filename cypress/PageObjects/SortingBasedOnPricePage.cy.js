/// <reference types="Cypress" />
const selectors = 
{
    input : {
        lowPrice : "input[id='low-price']",
        highPrice : "input[id='high-price']",
                
    },

    label : {

        clickOnGo : "span[class='a-button-inner'] input[type='submit']",
        price : "div[class*='puis-price-instructions-style'] span[class='a-price-whole']",
        
    },
}

class SortingBasedOnPricePage
{
    
    enterTheLowPrice(lowPrice)
    {
        cy.get(selectors.input.lowPrice).type(lowPrice);
    }
    
    enterTheHighPrice(highPrice)
    {
        cy.get(selectors.input.highPrice).type(highPrice);
    }
    
    clickOnGo()
    {
        cy.get(selectors.label.clickOnGo).click();
    }

    verifyingTheSortedProductsBasedOnPrice(lowPrice,maxPrice)
    {
        cy.get(selectors.label.price).then((productsPrice)=>
        {
            let products = new Array(); 
            for(var i=0;i<productsPrice.length;i++)
            {
                products.push(Number(productsPrice.eq(i).text().replace(/,/g,'')));
            }
           
            for(var i=0;i<products.length;i++)
            {
                
                expect(products[i]).to.be.gte(lowPrice);
                expect(products[i]).to.be.lte(maxPrice);

            } 

            // {               
            //     if(products[i]>=lowPrice && products[i]<=maxPrice)
            //         {                     
            //              expect(true).to.equal(true);               
            //         }
            //          else
            //         {
            //            expect(true).to.equal(false);
            //         }
            // }
          
            //     productsPrice=productsPrice.replace(/,/g,'');
            //     let j=0,i=0;
            //     while(i<productsPrice.length)
            //     {
            //         j=i+5;
            //        let productPrice = productsPrice.substring(i,j);
        
            //     if(productPrice >= 10000 && productPrice <= 20000)
            //     {
            //         expect(true).to.equal(true);
                   
            //     }
            //     else
            //     {
            //        expect(true).to.equal(false);
            //     }

            //     i=j;
             //}
        
       
        })
    }}

export default SortingBasedOnPricePage