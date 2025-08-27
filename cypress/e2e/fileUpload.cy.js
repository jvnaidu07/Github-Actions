///<reference types = "cypress"/>

describe("", () => {
    it("file upload", () => {
        cy.visit(Cypress.env("fileUpload"))
        cy.get("input[type='file']").attachFile("test1.xlsx");
        cy.contains("The upload is complete!")
    })
})