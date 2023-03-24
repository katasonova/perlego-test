/// <reference types ="cypress"/>

class LoginPage {

    verifyLoginPageOpened () {
        cy.get('[data-component-locator="Login"]').should('be.visible').within(() => {
            cy.get('[data-test-locator="step-card-title"]').should('have.text', 'Login to Perlego')
        })
    }

    inputUserEmail(email) {
    cy.get('#input-email').type(email)
    // to solve capcha in a semi automaric way
    // ideally capcha should be disabled for test envs as well as staging
    cy.get('#input-confirmationEmail').type(email)
    cy.wait(10000)
    cy.get('#input-confirmationEmail').type(email)
    }
}
    
const login = new LoginPage();
export default login;