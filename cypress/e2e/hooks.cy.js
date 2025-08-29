/// <reference types = "cypress"/>

describe("", () => {
    before(() => {
        cy.visit(Cypress.env("cypressHooks"))
    })
    it("hooks in cypress", () => {
        cy.get("ul[id='mega-menu-main-menu'] li").first().click();
        cy.go('back')
        // cy.go(-1)   // same as back
        // cy.go('forward')
        // cy.go(1)    // same as forward

    })
})