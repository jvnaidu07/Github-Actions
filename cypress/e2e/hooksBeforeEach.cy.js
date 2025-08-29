/// <reference types = "cypress"/>

describe("", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("cypressHooks"))
    })
    it("hooks in cypress", () => {
        cy.get("ul[id='mega-menu-main-menu'] li").first().click();
        cy.go('back')
        // cy.go(-1)   // same as back
        // cy.go('forward')
        // cy.go(1)    // same as forward

    });
    it("hooks in cypress", () => {
        cy.get("ul[id='mega-menu-main-menu'] li").eq(2).click();
        cy.go('back')

    })
    it("hooks in cypress", () => {
        cy.get("ul[id='mega-menu-main-menu'] li").eq(1).click();
        cy.go('back')
        cy.go('forward')

    })
})
