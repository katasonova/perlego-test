/// <reference types ="cypress"/>

class General {
    navigateToURL() {
        cy.visit("https://www.perlego.com/");
    }

    verifyOpenedSubPage (subPageTitle) {
        cy.get('h3').contains(subPageTitle).should('be.visible')
    }
     
}

const general = new General();
export default general;