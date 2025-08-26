///<reference types = "cypress"/>
describe("", () => {
    it("dropdown selection", () => {
        cy.visit(Cypress.env("dropDown"));

        Cypress._.times(3, () => {
            dateDetails.selectCountryfromDropdown().select('India').should('have.value', 'IND');
        })
    })
})
