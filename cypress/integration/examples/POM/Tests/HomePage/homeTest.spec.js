import homePage from "../../Pages/HomePage/homePage";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import general from "../../Pages/common";

Given('user navigates to the website', () => {
    homePage.navigateToURL()
});

When('user clicks on {string} header menu item', (menuItem) => {
    homePage.clickOnHeaderMenu(menuItem)
});

Then('verify {string} subpage is opened', (subPageTitle) => {
    general.verifyOpenedSubPage(subPageTitle)
})

When('user selects a browsing category {string}', (browsingCategory) => {
    homePage.selectBrowsingCategory(browsingCategory)
})

Then('verify {string} page is opened', (pageTitle) => {
    cy.get('h1').contains(pageTitle).should('be.visible')
})

Then('verify pagination returns {string} pages be deafult', (defaultPaginationPages) => {
    cy.get('[data-test-locator="BookGridPagination"]').within(() => {
        cy.get('[data-component-locator="pagination-wrapper"]').children().should('have.length', defaultPaginationPages)
    })
})

When('user searches for text {string}', (searchText) => {
    cy.get('#SearchWrapper').type(searchText)
})

When('user filters by publishers', () => {
    cy.get('#SearchTab-wrapper-publishers').click()
})

When('user selects {string} publisher', (selectedBublisher) => {
    cy.contains(selectedBublisher).click()
})

When('user filters by {string}', (filterByProp) => {
    cy.wait(1000)
    cy.get('[data-testid="SearchFilterButton"]', {timeout: 30000}).contains(filterByProp).click({force: true})
})

Then('verify {string} filter modal is opened', (modalTitle) => {
    const capitalizedTitle = Cypress._.upperCase(modalTitle)
    cy.get('[data-test-locator="DropdownBlock-menu"] h4', {timeout: 30000}).should('have.text', capitalizedTitle,)
})

When('user searches for a {string} topic', (topic) => {
    cy.get('#FilterSearchBar').type(topic)
})

When('user clears the topic search', () => {
    cy.get('[data-test-locator="SearchBarClearIcon"]').click({force: true})
})

Then('verify topic search input was cleared sucessfully', () => {
    cy.get('#FilterSearchBar input').should('have.attr', 'placeholder', 'Search for Topic')
})

When('user clicks on {string} topic', (topic) => {
    cy.get('[data-component-locator="FilterScrollableList"]').contains(topic).click({force:true})
})

Then('verify applied filter returns {string} books', (filteredBooks) => {
    cy.get('[data-test-locator="Grid-ItemGrid"]').children().should('have.length', filteredBooks)
})