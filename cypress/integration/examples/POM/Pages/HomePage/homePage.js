/// <reference types ="cypress"/>

class HomePage {
    navigateToURL() {
        cy.visit("https://www.perlego.com/");
    }
     
    clickOnHeaderMenu(menuItem) {
        cy.get('[data-testid="LandingPageHeader"]').contains(menuItem).click();
    }

    selectBrowsingCategory(browsingCategory) {
        cy.get('span').contains(browsingCategory).click()
    }
}
const homepage = new HomePage();
export default homepage;