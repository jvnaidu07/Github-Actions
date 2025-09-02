/// <reference types = "cypress"/>


describe("", () => {

    it("mouse hover", () => {
        cy.visit("https://testgrid.io/blog/cypress-testing/")
        cy.get("a[class='mega-menu-link']").eq(2).scrollIntoView()

    })
})
