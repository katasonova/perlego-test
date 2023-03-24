import login from "../../Pages/LoginPage/loginPage";
import homePage from "../../Pages/HomePage/homePage";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('user navigates to the website', () => {
    homePage.navigateToURL()
});

When("user clicks on {string} header menu item", (meniItem) => {
    homePage.clickOnHeaderMenu(meniItem)
});

Then('verify login page is opened', () => {
    login.verifyLoginPageOpened()
})

When('user clicks on {string} link', (linkName) => {
    cy.get('a').contains(linkName).click({force:true})
})

When('user inputs {string} email to start free trial', (email) => {
    login.inputUserEmail(email)
})

When('user confirms account creation', () => {
    cy.get('[data-testid="AccountCreation-ContinueButton"]').click({force:true})
})

When('user inputs {string} name to start free trial', (name) => {
    const arrName = name.split(" ")
    cy.get('#input-firstName').type(arrName[0])
    cy.get('#input-lastName').type(arrName[1])
})

When('user inputs {string} password to start free trial', (pwd) => {
    cy.get('[data-test-locator="password-input"]').type(pwd)
})

When('user accepts terms and conditions', () => {
    cy.get('label').contains('I accept').click({force:true})
})

When('user submits data for account creation', () => {
    cy.get('[data-testid="AccountCreation-SubmitButton"]').click({force:true})
})

When('user click on logo', () => {
    cy.get('[data-testid="PerlegoLogo"]')
})

Then('verify home page is opened', () => {
    cy.get('#home').should('be.visible')
})