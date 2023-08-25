/// <reference types="Cypress" />
const selectors = 
{
    button : {
        accountAndList : "#nav-link-accountList > span",
        continue : "span#continue",
        signInSubmit :"#signInSubmit",
    },
    input : {
        emailTextBox : "#ap_email",
        password : "#ap_password",
    },
    label : {
         username : "[for='ap_email']",
         password : "[for='ap_password']",
    },
}

class SignInPage
{
    validationOfUsernameLabelTitle()
    {
      const expectedUserName1 = "Email or mobile phone number";
      const expectedUserName2 = "Enter mobile phone number or email";
       return cy.get(selectors.label.username).invoke('text').then((usernameLabelText) =>
       {
         if(expectedUserName1 == usernameLabelText) {
            expect(usernameLabelText).to.equal(expectedUserName1);
         }
         else if(expectedUserName2 == usernameLabelText) {
            expect(usernameLabelText).to.equal(expectedUserName2);
         }
       });
    }

   
    validationOfPasswordLabelTitle()
    {
      const expectedPasswordTitle = "Password";
      cy.get(selectors.label.password).invoke('text').then( (passwordLabelText) =>
         {
           expect(passwordLabelText).to.contain(expectedPasswordTitle);
          //cy.wrap(passwordLabelText).invoke('text').should('eq','Password');
         }         
         );
    }
    enterEmailId(emailId)
    {
      return cy.get(selectors.input.emailTextBox).type(emailId);
    }
    clickOnContinueButton()
    {
       return cy.get(selectors.button.continue).click();
    }
    enterPassword(password)
    {
       return cy.get(selectors.input.password).type(password);
    }
    clickOnSignInSubmitButton()
    {
      return cy.get(selectors.button.signInSubmit).click();
    }
    clickOnAccountAndListButton()
    {
       return cy.get(selectors.button.accountAndList).click();
    }
}

export default SignInPage